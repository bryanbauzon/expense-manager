import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./primitiveInputCheckbox.html";
import { classSet } from 'lightning/utils';
import { VARIANT } from 'lightning/inputUtils';
import labelRequired from '@salesforce/label/LightningControl.required';
import { isNativeComponent, reflectAttribute } from 'lightning/utilsPrivate';
class LightningPrimitiveInputCheckbox extends LightningElement {
  constructor(...args) {
    super(...args);
    this.required = void 0;
    this.readOnly = void 0;
    this.label = void 0;
    this.labelHidden = void 0;
    this.helptextAlternativeText = void 0;
    this.fieldLevelHelp = void 0;
    this.ariaInvalid = void 0;
    this.ariaLabel = void 0;
    this.accessKey = void 0;
    this.name = void 0;
    this.disabled = void 0;
    this.variant = void 0;
    this.labelRequired = labelRequired;
    this._helpMessage = void 0;
  }
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._setChecked(value);
  }
  get helpMessage() {
    return this._helpMessage;
  }
  set helpMessage(message) {
    this._helpMessage = message;
    reflectAttribute(this, 'invalid', !!message);
  }
  get inputElement() {
    if (!this.cachedInputElement) {
      let inputElement = this.template.querySelector('input');
      this.cachedInputElement = inputElement;
    }
    return this.cachedInputElement;
  }
  get describedByElements() {
    return this.template.querySelector('[data-help-message]');
  }
  get isNativeShadow() {
    return this._isNativeShadow;
  }
  get isStandardVariant() {
    return this.variant === VARIANT.STANDARD || this.variant === VARIANT.LABEL_HIDDEN;
  }
  get isLabelHidden() {
    return this.variant === VARIANT.LABEL_HIDDEN;
  }
  get computedCheckboxClass() {
    return classSet('slds-checkbox').add({
      'slds-checkbox_standalone': !this.isStandardVariant
    }).toString();
  }
  get computedLabelClass() {
    return classSet('slds-form-element__label').add({
      'slds-assistive-text': this.isLabelHidden
    }).toString();
  }
  handleBlur() {
    this.dispatchEvent(new CustomEvent('blur'));
  }
  handleFocus() {
    this.dispatchEvent(new CustomEvent('focus'));
  }
  _setChecked(value) {
    value = Boolean(value);
    this._checked = value;
    reflectAttribute(this, 'checked', this.checked);
    if (this.rendered && this.inputElement.checked !== value) {
      this.inputElement.checked = this._checked;
    }
  }
  handleChange(event) {
    this._setChecked(event.target.checked);
    const changeEvent = new CustomEvent('change', {
      detail: {
        composed: true,
        bubbles: true,
        checked: event.target.checked
      }
    });
    this.dispatchEvent(changeEvent);
  }
  handleClick() {
    if (this.template.activeElement === null) {
      this.template.querySelector("[type='checkbox']").focus();
    }
  }
  connectedCallback() {
    this._isNativeShadow = isNativeComponent(this);
  }
  renderedCallback() {
    if (!this.rendered) {
      this.inputElement.checked = this.checked;
    }
    reflectAttribute(this, 'disabled', this.disabled);
    this.rendered = true;
  }
  disconnectedCallback() {
    this.cachedInputElement = undefined;
    this.rendered = false;
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(LightningPrimitiveInputCheckbox, {
  publicProps: {
    required: {
      config: 0
    },
    readOnly: {
      config: 0
    },
    label: {
      config: 0
    },
    labelHidden: {
      config: 0
    },
    helptextAlternativeText: {
      config: 0
    },
    fieldLevelHelp: {
      config: 0
    },
    ariaInvalid: {
      config: 0
    },
    ariaLabel: {
      config: 0
    },
    accessKey: {
      config: 0
    },
    name: {
      config: 0
    },
    disabled: {
      config: 0
    },
    variant: {
      config: 0
    },
    checked: {
      config: 3
    },
    helpMessage: {
      config: 3
    },
    inputElement: {
      config: 1
    },
    describedByElements: {
      config: 1
    },
    isNativeShadow: {
      config: 1
    }
  },
  fields: ["labelRequired", "_helpMessage"]
});
export default _registerComponent(LightningPrimitiveInputCheckbox, {
  tmpl: _tmpl,
  sel: "lightning-primitive-input-checkbox",
  apiVersion: 59
});