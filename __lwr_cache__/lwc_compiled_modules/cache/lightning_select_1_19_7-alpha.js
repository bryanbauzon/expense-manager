import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./select.html";
import labelRequired from '@salesforce/label/LightningControl.required';
import labelHelpTextAlternativeText from '@salesforce/label/LightningInput.helptextAlternativeText';
import { classSet, formatLabel } from 'lightning/utils';
import { classListMutation, getRealDOMId, normalizeBoolean, synchronizeAttrs, reflectAttribute } from 'lightning/utilsPrivate';
import { FieldConstraintApi, InteractingState, isEmptyString, getErrorMessage, normalizeVariant, VARIANT } from 'lightning/inputUtils';
const i18n = {
  required: labelRequired,
  helpTextAlternativeText: labelHelpTextAlternativeText
};
class LightningSelect extends LightningElement {
  constructor(...args) {
    super(...args);
    /**
     * The text label for the component.
     * To hide the label but make it available to assistive technologies,
     * use the label-hidden variant.
     * @type {string}
     */
    this.label = void 0;
    /**
     * The identifier for the component.
     * @type {string}
     */
    this.name = void 0;
    /**
     * The error message that's displayed below the menu
     * when a user interacts with the menu but does not select an option.
     * @type {string}
     */
    this.messageWhenValueMissing = void 0;
    /**
     * A shortcut key that activates and focuses on the menu.
     * @type {string}
     */
    this.accessKey = void 0;
    /**
     * Reserved for internal use. Controls auto-filling of the field.
     * @type {string}
     */
    this.autocomplete = void 0;
    this._options = [];
    this._helpMessage = '';
    this._selectedValue = void 0;
    this._variant = void 0;
    this._required = false;
    this._disabled = false;
    this._multiple = false;
    this._fieldLevelHelp = void 0;
    this._size = void 0;
  }
  connectedCallback() {
    this.classList.add('slds-form-element');
    this.updateClassList();
    this.interactingState = new InteractingState();
    this.interactingState.onleave(() => this.reportValidity());
  }
  renderedCallback() {
    if (this.options && this._selectedValue !== undefined) {
      this.selectOptionsByValue(this._selectedValue);
    }
    synchronizeAttrs(this.selectElement, {
      'aria-describedby': getRealDOMId(this.template.querySelector('[data-help-message]'))
    });
  }
  get computedAriaInvalid() {
    return !!this._helpMessage || undefined;
  }

  /**
   * Help text detailing the purpose and function of the menu of options.
   * The text is displayed in a tooltip above the menu.
   * @type {string}
   */
  get fieldLevelHelp() {
    return this._fieldLevelHelp;
  }
  set fieldLevelHelp(value) {
    this._fieldLevelHelp = value;
  }

  /**
   * The variant changes the appearance of the dropdown menu.
   * Accepted variants include standard, label-inline, label-hidden, and label-stacked.
   * This value defaults to standard, which displays the label above the dropdown menu.
   * label-hidden hides the label but make it available to assistive technology.
   * label-inline horizontally aligns the label and dropdown menu.
   * label-stacked places the label above the dropdown menu.
   * @type {string}
   */
  get variant() {
    return this._variant || VARIANT.STANDARD;
  }
  set variant(value) {
    this._variant = normalizeVariant(value);
    this.updateClassList();
    reflectAttribute(this, 'variant', this._variant);
  }

  /**
   * Specifies whether multiple options can be selected.
   * @type {boolean}
   * @default false
   */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = normalizeBoolean(value);
    reflectAttribute(this, 'multiple', this._multiple);
  }

  /**
   * The number of rows in the list that should be visible at one time.
   * Use this attribute with the multiple attribute.
   * @type {number}
   * @default 4
   */
  get size() {
    if (!this.multiple) {
      return null;
    }
    if (this._size === undefined) {
      return '4';
    }
    return this._size;
  }
  set size(newValue) {
    this._size = newValue;
  }

  /**
   * Specifies whether an option must be selected.
   * @type {boolean}
   * @default false
   */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = normalizeBoolean(value);
  }

  /**
   * Specifies whether the menu is disabled and users cannot interact with it.
   * @type {boolean}
   * @default false
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = normalizeBoolean(value);
  }

  /**
   * The value of the selected option.
   * If empty and a value is required, the component is in an invalid state.
   * @type {string}
   */
  get value() {
    return this._selectedValue;
  }
  set value(newValue) {
    this._selectedValue = newValue;
    if (this.isConnected) {
      this.selectOptionsByValue(newValue);
    }
  }

  /**
   * An array of menu options with key-value pairs for label and value.
   * @type {object}
   */
  get options() {
    return this._options;
  }
  set options(newValue) {
    this._options = newValue;
    if (this.isConnected && newValue) {
      this.selectOptionsByValue(this._selectedValue);
    }
  }
  updateClassList() {
    classListMutation(this.classList, {
      'slds-form-element_stacked': this.variant === VARIANT.LABEL_STACKED,
      'slds-form-element_horizontal': this.variant === VARIANT.LABEL_INLINE
    });
  }

  /**
   * Sets focus on the select element.
   */
  focus() {
    if (this.isConnected) {
      this.selectElement.focus();
    }
  }

  /**
   * Removes focus on from the select element.
   */
  blur() {
    if (this.isConnected) {
      this.selectElement.blur();
    }
  }

  /**
   * Represents the validity states that an element can be in, with respect to constraint validation.
   * @type {object}
   *
   */
  get validity() {
    return this._constraint.validity;
  }

  /**
   * Checks if the input is valid.
   * @returns {boolean} Indicates whether the element meets all constraint validations.
   */
  checkValidity() {
    return this._constraint.checkValidity();
  }

  /**
   * Sets a custom error message to be displayed when a form is submitted.
   * @param {string} message - The string that describes the error. If message is an empty string, the error message is reset.
   */
  setCustomValidity(message) {
    this._constraint.setCustomValidity(message);
    this.customErrorMessage = message;
  }

  /**
   * Displays the error messages and returns false if the input is invalid.
   * If the input is valid, reportValidity() clears displayed error messages and returns true.
   * @returns {boolean} - The validity status of the input fields.
   */
  reportValidity() {
    return this._constraint.reportValidity(message => {
      this._helpMessage = message;
    });
  }

  /**
   * Displays an error message on an invalid select field.
   * An invalid field fails at least one constraint validation
   * and returns false when checkValidity() is called.
   */
  showHelpMessageIfInvalid() {
    const validity = this.validity;
    if (validity.valid) {
      this._helpMessage = '';
      this.classList.remove('slds-has-error');
    } else {
      this.classList.add('slds-has-error');
      this._helpMessage = getErrorMessage(validity, {
        valueMissing: this.messageWhenValueMissing,
        customError: this.customErrorMessage
      });
    }
  }
  get i18n() {
    return i18n;
  }
  get selectElement() {
    return this.template.querySelector('select');
  }
  get isLabelHidden() {
    return this.variant === VARIANT.LABEL_HIDDEN;
  }
  get computedLabelClass() {
    return classSet('slds-form-element__label').add({
      'slds-assistive-text': this.isLabelHidden
    }).toString();
  }
  get _constraint() {
    if (!this._constraintApi) {
      this._constraintApi = new FieldConstraintApi(() => this, {
        valueMissing: () => {
          const isMultipleAndNoValue = this.multiple && (!this.value || this.value.length === 0);
          return !this.disabled && this.required && (isEmptyString(this.value) || isMultipleAndNoValue);
        }
      });
    }
    return this._constraintApi;
  }
  handleChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this._selectedValue = this.getSelectedOptionValues();
    this.dispatchEvent(new CustomEvent('change', {
      bubbles: true,
      composed: true,
      detail: {
        value: this._selectedValue
      }
    }));
  }
  handleFocus() {
    this.interactingState.enter();
    this.dispatchEvent(new CustomEvent('focus'));
  }
  handleBlur() {
    this.interactingState.leave();
    this.dispatchEvent(new CustomEvent('blur'));
  }
  selectOptionsByValue(optionValue) {
    if (this.multiple) {
      if (Array.isArray(optionValue)) {
        const options = this.template.querySelectorAll('option');
        options.forEach(option => {
          option.selected = optionValue.includes(option.value);
        });
      }
    } else {
      this.selectElement.value = optionValue;
    }
  }
  getSelectedOptionValues() {
    if (this.multiple) {
      const options = this.template.querySelectorAll('option');
      return Array.prototype.reduce.call(options, (selectedValues, option) => {
        if (option.selected) {
          selectedValues.push(option.value);
        }
        return selectedValues;
      }, []);
    }
    return this.selectElement.value;
  }
  get helptextAlternativeText() {
    return formatLabel(i18n.helpTextAlternativeText, this.label);
  }
  /*LWC compiler v3.0.0*/
}
LightningSelect.delegatesFocus = true;
LightningSelect.validationOptOut = ['class'];
_registerDecorators(LightningSelect, {
  publicProps: {
    label: {
      config: 0
    },
    name: {
      config: 0
    },
    messageWhenValueMissing: {
      config: 0
    },
    accessKey: {
      config: 0
    },
    autocomplete: {
      config: 0
    },
    fieldLevelHelp: {
      config: 3
    },
    variant: {
      config: 3
    },
    multiple: {
      config: 3
    },
    size: {
      config: 3
    },
    required: {
      config: 3
    },
    disabled: {
      config: 3
    },
    value: {
      config: 3
    },
    options: {
      config: 3
    },
    validity: {
      config: 1
    }
  },
  publicMethods: ["focus", "blur", "checkValidity", "setCustomValidity", "reportValidity", "showHelpMessageIfInvalid"],
  track: {
    _options: 1
  },
  fields: ["_helpMessage", "_selectedValue", "_variant", "_required", "_disabled", "_multiple", "_fieldLevelHelp", "_size"]
});
export default _registerComponent(LightningSelect, {
  tmpl: _tmpl,
  sel: "lightning-select",
  apiVersion: 59
});