import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./primitiveInputSimple.html";
import labelRequired from '@salesforce/label/LightningControl.required';
import labelClearInput from '@salesforce/label/LightningControl.clear';
import labelLoadingIndicator from '@salesforce/label/LightningControl.loading';
import { normalizeTime, normalizeDate, normalizeUTCDateTime, normalizeDateTimeToUTC } from './mobileInputUtils';
import { calculateFractionDigitsFromStep, formatNumber, fromIsoDecimal, hasValidNumberShortcut, hasValidNumberSymbol, increaseNumberByStep, isValidNumber, isValidNumberCharacter, stringifyNumber, toIsoDecimal } from 'lightning/numberUtils';
import { reflectAttribute, isSafari, isNativeComponent, isNotUndefinedOrNull, normalizeKeyValue, normalizeString, setDecoratedDragonInputValueWithoutEvent, isDesktopBrowser } from 'lightning/utilsPrivate';
import { InputSelectionCache } from './selection';
import { normalizeInput } from './normalize';
const i18n = {
  required: labelRequired,
  clear: labelClearInput,
  loading: labelLoadingIndicator
};
const VALID_NUMBER_FORMATTERS = ['decimal', 'percent', 'percent-fixed', 'currency'];
const DEFAULT_FORMATTER = VALID_NUMBER_FORMATTERS[0];
class LightningPrimitiveInputSimple extends LightningElement {
  get ariaDescribedByElements() {
    return this.template.querySelector('[data-help-message]');
  }
  get isNativeShadow() {
    return this._isNativeShadow;
  }
  get type() {
    return this._type;
  }
  set type(value) {
    const normalizedValue = normalizeString(value);
    this._type = normalizedValue;
    if (this._rendered) {
      // The type is being changed after render, which means the input element may be different (eg. changing
      // from text to 'checkbox', so we need to set the initial value again
      this._initialValueSet = false;
      if (this.isTypeNumber) {
        // If the type has changed, we need to re-parse the value as a number
        this.updateNumberValue(this._value);
      }
    }
  }
  get formatter() {
    return this._formatter;
  }
  set formatter(value) {
    this._formatter = normalizeString(value, {
      fallbackValue: DEFAULT_FORMATTER,
      validValues: VALID_NUMBER_FORMATTERS
    });
    this.updateInputDisplayValueIfTypeNumber();
  }
  get formatFractionDigits() {
    return this._formatFractionDigits;
  }
  set formatFractionDigits(value) {
    this._formatFractionDigits = value;
    if (this._rendered && this.isTypeNumber) {
      this.setInputValue(this.displayedValue);
    }
  }
  get step() {
    return this._step;
  }
  set step(value) {
    // 'value' has already been normalized in lightning-input
    this._step = value;

    // Displayed value depends on the format number, so if we're not showing the raw
    // number we should update the value
    if (this._rendered && this.isTypeNumber && !this._showRawNumber && this.inputElement) {
      this.setInputValue(this.displayedValue);
    }
  }
  get helpMessage() {
    return this._helpMessage;
  }
  set helpMessage(message) {
    this._helpMessage = message;
    reflectAttribute(this, 'invalid', !!message);
  }
  get value() {
    return this._value;
  }
  set value(value) {
    const previousValue = this._value;
    this._value = normalizeInput(value);
    if (this._rendered) {
      const badInput = this.validity.badInput;
      if (this.isTypeNumber) {
        this._value = stringifyNumber(value);
        // the extra check for whether the value has changed is done for cases
        // when the same value is set back in a change handler, this is to avoid
        // the raw number from changing formatting under the user
        // (eg. if the user typed 1,000 we want to preserve that formatting as the user
        // types the value)
        if (this._value !== previousValue) {
          this.updateNumberValue(value);
        }

        // If updated value is invalid or not null, it should be updated
        // Invalid numeric values should stay as-is to avoid programatically wiping a user-provided invalid
        // value, such as '2e' from the input element. See @W-14121203
        if (!badInput || !!value) {
          this.setInputValueIfNeeded();
        }
      } else {
        this.setInputValueIfNeeded();
      }
    }
  }
  setInputValueIfNeeded() {
    // Again, due to the interop layer we need to check whether the value being set
    // is different, otherwise we're duplicating the sets on the input, which result
    // in different bugs like Japanese IME duplication of characters in Safari (likely a browser bug) or
    // character position re-set in IE11.
    if (this.inputElement.value !== this.displayedValue) {
      this.setInputValue(this.getDisplayedValue());
    }
  }
  get inputElement() {
    if (!this.cachedInputElement) {
      let inputElement = this.template.querySelector('input');
      this.cachedInputElement = inputElement;
    }
    return this.cachedInputElement;
  }
  getDisplayedValue() {
    if (this.isTypeNumber) {
      // When only a symbol is entered by the user, set the display value as the user's input.
      // This will not affect the value dispatched by input via the change event, as it only dispatches a valid decimal number.
      // Due to the above, in integrations like input-field, the user's initial input of a symbol
      // like a minus sign will not be overwritten by an empty string value.
      // See description in PR for more details: https://github.com/salesforce-experience-platform/lightning-components/pull/3843
      if (this.inputElement.value.length === 1 && hasValidNumberSymbol(this.inputElement.value)) {
        return this.inputElement.value;
      }

      // If the number is not valid (bad input, step mismatch, etc.) show the raw number as
      // well, otherwise the formatted value ends up being 'NaN' which makes it hard to
      // see mistakes
      if (this._showRawNumber || !this.validity.valid) {
        if (hasValidNumberShortcut(this._numberRawValue) && isValidNumber(this._numberRawValue)) {
          this._numberRawValue = fromIsoDecimal(this._value);
        }
        return this._numberRawValue;
      }
      return formatNumber(this._value, this.buildFormatNumberOptions(this.formatter));
    }
    if (this.isTypeMobileDate || this.isTypeMobileDateTime || this.isTypeMobileTime) {
      return this.normalizeDateTimeString(this._value);
    }
    return this._value;
  }
  getNumberRawValue() {
    return this._numberRawValue;
  }

  /********* PRIVATE VARIABLES *********/

  /********* EVENT HANDLERS *********/
  handleFocus(event) {
    event.stopPropagation();
    if (this._rendered && this.isTypeNumber) {
      this._showRawNumber = true;
      this._selectionCache.preserve(this.inputElement);
      this.inputElement.value = this.displayedValue;
      this._selectionCache.restore(this.inputElement);
    }
    this.dispatchEvent(new CustomEvent('focus'));
  }
  handleBlur(event) {
    event.stopPropagation();
    if (this.validity.valid) {
      this._showRawNumber = false;
    }
    this.dispatchEvent(new CustomEvent('blur'));
  }
  handleKeyDown(event) {
    if (this.isTypeNumber) {
      // we're letting "Shift" through to prevent capital letters, other special symbols for type="number"
      const hasMetaOrCtrlModifier = event.metaKey || event.ctrlKey;
      // need to check that event.key is valid for "autofill" cases
      if (!hasMetaOrCtrlModifier && !this.readOnly && event.key) {
        const key = normalizeKeyValue(event.key);
        if (key.length === 1 && !isValidNumberCharacter(key)) {
          event.preventDefault();
        }
        if (key === 'ArrowUp') {
          event.preventDefault();
          this.numberStepUpAndDispatchEvents(1);
        } else if (key === 'ArrowDown') {
          event.preventDefault();
          this.numberStepUpAndDispatchEvents(-1);
        }
      }
    }
  }
  handleInput(event) {
    event.stopPropagation();
    if (this.isTypeNumber) {
      // for invalid numbers the value might stay the same as the user
      // changed the invalid input, so we need to update the raw value
      this._numberRawValue = this.inputElement.value;
    }
    if (this.value === event.target.value) {
      return;
    }
    this.dispatchChangeEvent();
  }
  handleChange(event) {
    event.stopPropagation();
    this.dispatchCommitEvent();
    if (this.value === event.target.value) {
      return;
    }
    this.dispatchChangeEvent();
  }

  /**
   * Handle text selection.
   * Dynamically bound to the select event by `renderedCallback`.
   * This allows us to cache text selection in Safari, which doesn't preserve selection.
   */
  handleSelect() {
    if (isSafari) {
      this._selectionCache.preserve(this.inputElement);
    }
  }

  /********* EVENT DISPATCHERS *********/

  dispatchCommitEvent() {
    this.dispatchEvent(new CustomEvent('commit'));
  }
  dispatchChangeEvent() {
    // this.interactingState.enter(); // Check for all instances of this and migrate

    const detail = {};

    // the mobile input time/date/datetime components use `primitive-input-simple`
    if (this.isTypeNumber) {
      this._numberRawValue = this.inputElement.value;
      detail.value = toIsoDecimal(this.inputElement.value);
    } else if (this.isTypeMobileDateTime) {
      detail.value = normalizeDateTimeToUTC(this.inputElement.value, this.timezone);
    } else if (this.isTypeMobileTime) {
      detail.value = normalizeTime(this.inputElement.value);
    } else {
      detail.value = this.inputElement.value;
    }

    // this._updateValueAndValidityAttribute(detail.value); > check this

    this._value = detail.value;
    // this._updateProxyInputAttributes('value');

    this.dispatchChangeEventWithDetail(detail);
  }
  dispatchChangeEventWithDetail(detail) {
    this.dispatchEvent(new CustomEvent('change', {
      composed: true,
      bubbles: true,
      detail
    }));
  }

  /********* TYPE GETTERS *********/
  /**
   * Gets the value for the actual 'type' attribute on the input element.
   */
  get internalType() {
    // Maps number->text to support shorthand input strings like '1k'.
    if (this.isTypeNumber || this.isTypeEmail) {
      return 'text';
    }
    return this.type;
  }
  get isTypeNumber() {
    return this.type === 'number';
  }
  get isTypeEmail() {
    // To test against native change this to type="emails"
    return this.type === 'email';
  }
  get isTypeSearch() {
    return this.type === 'search';
  }
  get isTypeText() {
    return this.type === 'text';
  }

  // the types below are used for the mobile input date/datetime/time components

  get isTypeDate() {
    return this.type === 'date';
  }
  get isTypeDateTime() {
    return this.type === 'datetime' || this.type === 'datetime-local';
  }
  get isTypeTime() {
    return this.type === 'time';
  }
  get isTypeMobileDate() {
    return this.isTypeDate && !isDesktopBrowser();
  }
  get isTypeMobileTime() {
    return this.isTypeTime && !isDesktopBrowser();
  }
  get isTypeMobileDateTime() {
    return this.isTypeDateTime && !isDesktopBrowser();
  }

  /***** GETTERS *****/

  get showClearButton() {
    return this.isTypeSearch && isNotUndefinedOrNull(this._value) && this._value !== '';
  }
  get inputMode() {
    if (this.isTypeNumber) {
      return 'decimal';
    } else if (this.isTypeEmail) {
      return 'email';
    }
    return null;
  }
  get displayedValue() {
    if (this.isTypeNumber) {
      return this.getDisplayedValue();
    }

    // the mobile input time/date/datetime components use `primitive-input-simple`
    if (this.isTypeMobileTime || this.isTypeMobileDate || this.isTypeMobileDateTime) {
      return this.normalizeDateTimeString(this._value, this.timezone);
    }
    return this._value;
  }
  normalizeDateTimeString(value) {
    if (this.isTypeDate) {
      return normalizeDate(value);
    } else if (this.isTypeTime) {
      return normalizeTime(value);
    } else if (this.isTypeDateTime) {
      return normalizeUTCDateTime(value, this.timezone);
    }
    return value;
  }
  get i18n() {
    return i18n;
  }
  get computedFormElementClass() {
    return this.isTypeSearch ? 'slds-form-element__control slds-grow slds-input-has-icon slds-input-has-icon_left-right' : 'slds-form-element__control slds-grow';
  }

  /********* NUMBER *********/

  updateNumberValue(value) {
    const newValue = stringifyNumber(value);
    this._value = newValue;
    this._numberRawValue = fromIsoDecimal(newValue);
  }

  /**
   * Increases (if increment is positive, decreases otherwise) the number value of the input by the increment
   * multiple of the given 'step'. Additionally dispatches the 'change' and 'commit' events.
   *
   * @param {Number} increment A multiple of the step to increase, when step is 'any',
   * the step is assumed to be 1.
   * @private
   */
  numberStepUpAndDispatchEvents(increment) {
    if (this._readOnly || this._disabled) {
      return;
    }
    this._value = increaseNumberByStep({
      value: this._value,
      step: this.step,
      increment,
      fractionDigits: this.buildFormatNumberOptions(this.formatter).minimumFractionDigits
    });

    // Raw value is the value the user entered (we preserve a user's input),
    // since we're generating a new value we're overriding it
    this._numberRawValue = fromIsoDecimal(this._value);
    this.setInputValue(this.displayedValue);
    this.dispatchChangeEvent();
    this.dispatchCommitEvent();
  }
  buildFormatNumberOptions(formatter) {
    const options = {
      style: formatter
    };
    // Use the min/max fraction digits from the formatFractionDigits provided by the user if available.
    // Otherwise, use the number of digits calculated from step
    if (this._formatFractionDigits !== undefined) {
      options.minimumFractionDigits = this._formatFractionDigits;
      options.maximumFractionDigits = this._formatFractionDigits;
    } else {
      let digitsFromStep = calculateFractionDigitsFromStep(this._step);
      // if formatting percentages, when calculating digits from step, take into
      // consideration that the formatted number is effectively multiplied by 10^2, ie. 0.1 is 10%
      // so we need to subtract 2 digits;
      if (formatter === 'percent' && typeof digitsFromStep === 'number') {
        digitsFromStep -= 2;
        if (digitsFromStep < 0) {
          digitsFromStep = 0;
        }
      }
      options.minimumFractionDigits = digitsFromStep;
      options.maximumFractionDigits = digitsFromStep;
    }
    return options;
  }
  updateInputDisplayValueIfTypeNumber() {
    // Displayed value depends on the format number, so if we're not showing the raw
    // number we should update the value
    if (this._rendered && this.isTypeNumber && !this._showRawNumber && this.inputElement) {
      this.setInputValue(this.displayedValue);
    }
  }

  /** ---- */

  clearAndSetFocusOnInput(event) {
    // TODO: Discuss this, it seems the wrong thing to do.
    // button is removed from template, but
    // event still is propagated, For example, captured by panel,
    // then cause panel think is clicked outside.
    event.stopPropagation();
    this.setInputValue('');
    this._value = '';
    // this._updateValueAndValidityAttribute('');

    this.inputElement.focus();
    this.dispatchChangeEventWithDetail({
      value: this._value
    });
    this.dispatchCommitEvent();
  }
  setInputValue(value) {
    // set value without dispatching an 'input' event
    setDecoratedDragonInputValueWithoutEvent(this.inputElement, value);
  }
  connectedCallback() {
    if (this.isTypeNumber) {
      this.updateNumberValue(this._value);
    }

    // Using this mechanism to communicate to AriaObserver in lightning-input
    // that the primitive is in native shadow and it needs to copy content over
    this._isNativeShadow = isNativeComponent(this);
  }
  renderedCallback() {
    // For W-7962838: In Safari, focus doesn't scroll input into view.
    // Attach the event listener used to cache the selected text when selection changes.
    if (isSafari) {
      this.inputElement.addEventListener('select', this.handleSelect.bind(this));
    }
    if (!this._initialValueSet && this.inputElement) {
      this._rendered = true;
      if (this.isTypeNumber) {
        this._numberRawValue = fromIsoDecimal(this._value);
      }
      this.setInputValue(this.displayedValue);
      this._initialValueSet = true;
    }
    reflectAttribute(this, 'variant', this.variant);
    reflectAttribute(this, 'disabled', this.disabled);
    reflectAttribute(this, 'readonly', this.readOnly);
  }
  constructor() {
    super();

    // The selection cache allows us an input to remember what text was selected
    // in cases where we change the text on blur or in browsers (Safari) that
    // don't track it properly.
    this._type = void 0;
    this.hasExternalLabel = void 0;
    this.computedLabelClass = void 0;
    this.required = void 0;
    this.label = void 0;
    this.fieldLevelHelp = void 0;
    this.helptextAlternativeText = void 0;
    this.ariaHasPopup = void 0;
    this.accessKey = void 0;
    this.autocomplete = void 0;
    this.isLoading = void 0;
    this.max = void 0;
    this.min = void 0;
    this.maxLength = void 0;
    this.minLength = void 0;
    this.pattern = void 0;
    this.placeholder = void 0;
    this.name = void 0;
    this.readOnly = void 0;
    this.disabled = void 0;
    this.variant = void 0;
    this.validity = void 0;
    this.ariaLabel = void 0;
    this.ariaInvalid = void 0;
    this.timezone = void 0;
    this._formatter = DEFAULT_FORMATTER;
    this._showRawNumber = false;
    this._initialValueSet = false;
    this._rendered = void 0;
    this._selectionCache = void 0;
    this._helpMessage = void 0;
    this._step = void 0;
    this._numberRawValue = '';
    this._value = '';
    this._selectionCache = new InputSelectionCache();
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(LightningPrimitiveInputSimple, {
  publicProps: {
    hasExternalLabel: {
      config: 0
    },
    computedLabelClass: {
      config: 0
    },
    required: {
      config: 0
    },
    label: {
      config: 0
    },
    fieldLevelHelp: {
      config: 0
    },
    helptextAlternativeText: {
      config: 0
    },
    ariaHasPopup: {
      config: 0
    },
    accessKey: {
      config: 0
    },
    autocomplete: {
      config: 0
    },
    isLoading: {
      config: 0
    },
    max: {
      config: 0
    },
    min: {
      config: 0
    },
    maxLength: {
      config: 0
    },
    minLength: {
      config: 0
    },
    pattern: {
      config: 0
    },
    placeholder: {
      config: 0
    },
    name: {
      config: 0
    },
    readOnly: {
      config: 0
    },
    disabled: {
      config: 0
    },
    variant: {
      config: 0
    },
    validity: {
      config: 0
    },
    ariaLabel: {
      config: 0
    },
    ariaInvalid: {
      config: 0
    },
    timezone: {
      config: 0
    },
    ariaDescribedByElements: {
      config: 1
    },
    isNativeShadow: {
      config: 1
    },
    type: {
      config: 3
    },
    formatter: {
      config: 3
    },
    formatFractionDigits: {
      config: 3
    },
    step: {
      config: 3
    },
    helpMessage: {
      config: 3
    },
    value: {
      config: 3
    },
    inputElement: {
      config: 1
    }
  },
  publicMethods: ["getDisplayedValue", "getNumberRawValue"],
  fields: ["_type", "_formatter", "_showRawNumber", "_initialValueSet", "_rendered", "_selectionCache", "_helpMessage", "_step", "_numberRawValue", "_value"]
});
export default _registerComponent(LightningPrimitiveInputSimple, {
  tmpl: _tmpl,
  sel: "lightning-primitive-input-simple",
  apiVersion: 59
});