import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./combobox.html";
import labelRequired from '@salesforce/label/LightningControl.required';
import labelPlaceholder from '@salesforce/label/LightningCombobox.placeholder';
import labelHelpTextAlternativeText from '@salesforce/label/LightningInput.helptextAlternativeText';
import { classSet, formatLabel } from 'lightning/utils';
import { classListMutation, normalizeArray, normalizeBoolean, reflectAttribute, synchronizeAttrs, isCSR } from 'lightning/utilsPrivate';
import { isEmptyString, InteractingState, FieldConstraintApi, normalizeVariant, VARIANT } from 'lightning/inputUtils';
const i18n = {
  required: labelRequired,
  placeholder: labelPlaceholder,
  helpTextAlternativeText: labelHelpTextAlternativeText
};
/**
 * A widget that provides an input field that is readonly,
 * accompanied by a dropdown list of selectable options.
 */
class LightningCombobox extends LightningElement {
  constructor(...args) {
    super(...args);
    this._ariaLabelledBy = '';
    this._ariaDescribedBy = '';
    this._fieldLevelHelp = '';
    this._selectedLabel = '';
    this._disabled = false;
    this._readOnly = false;
    this._spinnerActive = false;
    this._required = false;
    this._variant = void 0;
    this._helpMessage = void 0;
    this._labelForId = void 0;
    this._items = [];
    /**
     * Reserved for internal use. Controls auto-filling of the field.
     * @type {string}
     */
    this.autocomplete = void 0;
    /**
     * Text label for the combobox.
     */
    this.label = void 0;
    /**
     * Specifies where the drop-down list is aligned with or anchored to
     * the selection field. By default the list is aligned with the
     * selection field at the top left so the list opens down. Use bottom-left
     * to make the selection field display at the bottom so the list opens
     * above it. Use auto to let the component determine where to open
     * the list based on space available.
     * @type {string}
     * @default left
     */
    this.dropdownAlignment = 'left';
    /**
     * Text that is displayed before an option is selected, to prompt the user
     * to select an option. The default is "Select an Option".
     * @type {string}
     * @default Select an Option
     */
    this.placeholder = i18n.placeholder;
    // Validity related message
    /**
     * Error message to be displayed when the value is missing and input is required.
     * @type {string}
     */
    this.messageWhenValueMissing = void 0;
    /**
     * Specifies the name of the combobox.
     * @type {string}
     */
    this.name = void 0;
  }
  renderedCallback() {
    this.synchronizeA11y();
  }
  connectedCallback() {
    this.classList.add('slds-form-element');
    this.updateClassList();
    this.interactingState = new InteractingState();
    this.interactingState.onleave(() => this.showHelpMessageIfInvalid());

    // The connected logic here is needed because at the point when @api setters
    // are called other values may not have been set yet, so it could happen that the 'value' was set, but 'options'
    // are not available, or that the 'options' and 'value' have been set but 'multiple' hasn't been set yet.
    // So here we make sure that we start processing the data only once the element is actually in DOM, which
    // should be beneficial for performance as well
    this.connected = true;
    this._items = this.generateItems(this.options);
    if (this.options && this.selectedValue !== undefined) {
      this.updateSelectedOptions();
    }
  }
  updateClassList() {
    classListMutation(this.classList, {
      'slds-form-element_stacked': this.variant === VARIANT.LABEL_STACKED,
      'slds-form-element_horizontal': this.variant === VARIANT.LABEL_INLINE
    });
  }
  disconnectedCallback() {
    this.connected = false;
  }

  /**
   * Reserved for internal use. Use the standard aria-labelledby instead. A space-separated list of element IDs that provide labels for the combobox.
   * @type {string}
   */
  get ariaLabelledBy() {
    return this._ariaLabelledBy;
  }
  set ariaLabelledBy(labelledBy) {
    this._ariaLabelledBy = labelledBy;
  }

  /**
   * Reserved for internal use. Use the standard aria-describedby instead. A space-separated list of element IDs that provide descriptive labels for the combobox.
   * @type {string}
   */
  get ariaDescribedBy() {
    return this._ariaDescribedBy;
  }
  set ariaDescribedBy(describedBy) {
    this._ariaDescribedBy = describedBy;
  }

  /**
   * Help text detailing the purpose and function of the combobox.
   * @type {string}
   */
  get fieldLevelHelp() {
    return this._fieldLevelHelp;
  }
  set fieldLevelHelp(value) {
    this._fieldLevelHelp = value;
  }

  /**
   * The variant changes the appearance of the combobox.
   * Accepted variants include standard, label-hidden, label-inline, and label-stacked.
   * This value defaults to standard.
   * Use label-hidden to hide the label but make it available to assistive technology.
   * Use label-inline to horizontally align the label and combobox.
   * Use label-stacked to place the label above the combobox.
   * @type {string}
   * @default standard
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
   * Specifies the value of an input element.
   * @type {object}
   */
  get value() {
    return this.selectedValue;
  }
  set value(newValue) {
    // There are some cases where this won't work correctly
    // See https://git.soma.salesforce.com/raptor/raptor/issues/457
    if (newValue !== this.selectedValue) {
      this.selectedValue = newValue;
      if (this.connected && this.options) {
        this.updateSelectedOptions();
      }
    }
  }

  /**
   * A list of options that are available for selection. Each option has the following attributes: label and value.
   * @type {object[]}
   * @required
   */
  get options() {
    return this._options || [];
  }
  set options(newValue) {
    this._options = normalizeArray(newValue);
    if (this.connected) {
      this._items = this.generateItems(this._options);
      this.updateSelectedOptions();
    }
  }

  /**
   * If present, the combobox is disabled and users cannot interact with it.
   * @type {boolean}
   * @default false
   */
  get disabled() {
    return this._disabled || this._readOnly || false;
  }
  set disabled(value) {
    this._disabled = normalizeBoolean(value);
  }

  /**
   * If present, the combobox is read-only.
   * A read-only combobox is also disabled.
   * @type {boolean}
   * @default false
   */
  get readOnly() {
    return this.disabled;
  }
  set readOnly(value) {
    this._readOnly = normalizeBoolean(value);
  }

  /**
   * If present, a value must be selected before the form can be submitted.
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
   * If present, a spinner is displayed below the menu items to indicate loading activity.
   * @type {boolean}
   * @default false
   */
  get spinnerActive() {
    return this._spinnerActive;
  }
  set spinnerActive(value) {
    this._spinnerActive = normalizeBoolean(value);
  }

  /**
   * Sets focus on the combobox.
   */
  focus() {
    if (this.connected) {
      this.getBaseComboboxElement().focus();
    }
  }

  /**
   * Removes focus from the combobox.
   */
  blur() {
    if (this.connected) {
      this.getBaseComboboxElement().blur();
    }
  }

  /**
   * Represents the validity states that an element can be in, with respect to constraint validation.
   * @type {object}
   */
  get validity() {
    return this._constraint.validity;
  }

  /**
   * Returns the valid attribute value (Boolean) on the ValidityState object.
   * @returns {boolean} Indicates whether the combobox has any validity errors.
   */
  checkValidity() {
    return this._constraint.checkValidity();
  }

  /**
   * Displays the error messages and returns false if the input is invalid.
   * If the input is valid, reportValidity() clears displayed error messages and returns true.
   * @returns {boolean} - The validity status of the combobox.
   */
  reportValidity() {
    return this._constraint.reportValidity(message => {
      // manage invalid attribute on the base combobox
      // this is done to allow css to target invalid base-combobox state
      // we may want to update the logic in base combobox to handle this
      // more generally once more usages like grouped, lookupaddress etc. are migrated
      reflectAttribute(this.template.querySelector('lightning-base-combobox'), 'invalid', !this.checkValidity());
      this._helpMessage = message;
    });
  }

  /**
   * Sets a custom error message to be displayed when the combobox value is submitted.
   * @param {string} message - The string that describes the error. If message is an empty string, the error message
   * is reset.
   */
  setCustomValidity(message) {
    this._constraint.setCustomValidity(message);
  }

  /**
   * Shows the help message if the combobox is in an invalid state.
   */
  showHelpMessageIfInvalid() {
    this.reportValidity();
  }
  handleComboboxReady(e) {
    this._labelForId = e.detail.id;
  }
  synchronizeA11y() {
    synchronizeAttrs(this.template.querySelector('label'), {
      for: this._labelForId
    });
    const baseCombobox = this.template.querySelector('lightning-base-combobox');
    baseCombobox.inputLabelledByElement = this.ariaLabelledBy;
    baseCombobox.inputDescribedByElements = this.computedAriaDescribedBy;
  }
  get templateRootNode() {
    return isCSR ? this.template.host.getRootNode() : null;
  }
  get i18n() {
    return i18n;
  }
  get isLabelHidden() {
    return this.variant === VARIANT.LABEL_HIDDEN;
  }
  get computedLabelClass() {
    return classSet('slds-form-element__label').add({
      'slds-assistive-text': this.isLabelHidden
    }).toString();
  }
  get computedAriaDescribedBy() {
    const describedByElements = [];
    if (this._helpMessage) {
      const helpText = this.template.querySelector('[data-help-text]');
      describedByElements.push(helpText);
    }
    if (typeof this.ariaDescribedBy === 'string') {
      describedByElements.push(this.ariaDescribedBy);
    }
    return describedByElements;
  }
  handleSelect(event) {
    if (event.detail.value === this.selectedValue) {
      return;
    }
    this.selectedValue = event.detail.value;
    this.updateSelectedOptions();
    // the change event needs to propagate to elements outside of the light-DOM, hence making it composed.
    this.dispatchEvent(new CustomEvent('change', {
      composed: true,
      bubbles: true,
      detail: {
        value: this.selectedValue
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
  handleDropdownOpen() {
    this.dispatchEvent(new CustomEvent('open'));
  }
  updateSelectedOptions() {
    this.updateSelectedLabelFromValue(this.selectedValue);
    this.markOptionSelectedFromValue(this.selectedValue);
  }
  markOptionSelectedFromValue(value) {
    if (this._items) {
      const selectedItem = this._items.find(item => item.value === value);
      // de-select previously selected item
      if (this._selectedItem) {
        this._selectedItem.checked = false;
        this._selectedItem.iconName = undefined;
        this._selectedItem.highlight = false;
      }
      this._selectedItem = selectedItem;
      if (selectedItem) {
        selectedItem.iconName = 'utility:check';
        this._selectedItem.highlight = true;
        this._selectedItem.checked = true;
      }
      // Make a shallow copy to trigger an update on the combobox
      this._items = this._items.slice();
    }
  }
  updateSelectedLabelFromValue(newValue) {
    this._selectedLabel = this.getOptionLabelByValue(newValue);
  }
  getOptionLabelByValue(value) {
    const foundOption = this.options.find(option => option.value === value);
    if (foundOption) {
      return foundOption.label;
    }
    return '';
  }
  generateItems(options) {
    return options.map(option => {
      const type = option.description ? 'option-card' : 'option-inline';
      return {
        type,
        text: option.label,
        subText: option.description,
        highlight: this.value === option.value,
        iconSize: 'x-small',
        value: option.value
      };
    });
  }
  getBaseComboboxElement() {
    return this.template.querySelector('lightning-base-combobox');
  }
  get _constraint() {
    if (!this._constraintApi) {
      this._constraintApi = new FieldConstraintApi(() => this, {
        valueMissing: () => !this.disabled && this.required && isEmptyString(this.selectedValue)
      });
    }
    return this._constraintApi;
  }
  get helptextAlternativeText() {
    return formatLabel(i18n.helpTextAlternativeText, this.label);
  }
  /*LWC compiler v3.0.0*/
}
LightningCombobox.delegatesFocus = true;
LightningCombobox.validationOptOut = ['class'];
_registerDecorators(LightningCombobox, {
  publicProps: {
    autocomplete: {
      config: 0
    },
    label: {
      config: 0
    },
    dropdownAlignment: {
      config: 0
    },
    placeholder: {
      config: 0
    },
    messageWhenValueMissing: {
      config: 0
    },
    name: {
      config: 0
    },
    ariaLabelledBy: {
      config: 3
    },
    ariaDescribedBy: {
      config: 3
    },
    fieldLevelHelp: {
      config: 3
    },
    variant: {
      config: 3
    },
    value: {
      config: 3
    },
    options: {
      config: 3
    },
    disabled: {
      config: 3
    },
    readOnly: {
      config: 3
    },
    required: {
      config: 3
    },
    spinnerActive: {
      config: 3
    },
    validity: {
      config: 1
    }
  },
  publicMethods: ["focus", "blur", "checkValidity", "reportValidity", "setCustomValidity", "showHelpMessageIfInvalid"],
  track: {
    _items: 1
  },
  fields: ["_ariaLabelledBy", "_ariaDescribedBy", "_fieldLevelHelp", "_selectedLabel", "_disabled", "_readOnly", "_spinnerActive", "_required", "_variant", "_helpMessage", "_labelForId"]
});
export default _registerComponent(LightningCombobox, {
  tmpl: _tmpl,
  sel: "lightning-combobox",
  apiVersion: 59
});