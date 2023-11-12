import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./primitiveInputToggle.html";
import { isNativeComponent, normalizeAriaAttribute, reflectAttribute } from 'lightning/utilsPrivate';
import { VARIANT } from 'lightning/inputUtils';
import labelRequired from '@salesforce/label/LightningControl.required';
const i18n = {
  required: labelRequired
};
class LightningPrimitiveInputToggle extends LightningElement {
  constructor(...args) {
    super(...args);
    this._checked = void 0;
    this._value = '';
    this._ariaLabel = void 0;
    this._cachedInputElement = void 0;
    this._helpMessage = '';
    this._messageToggleActive = void 0;
    this._messageToggleInactive = void 0;
    this.initialRender = false;
    this.accessKey = void 0;
    this.disabled = void 0;
    this.label = void 0;
    this.variant = void 0;
    this.name = void 0;
    this.readOnly = void 0;
    this.required = void 0;
    this.ariaInvalid = void 0;
    /**
     * Text shown for the active state of a toggle. The default is "Active".
     * @type {string}
     */
    this.messageToggleActive = void 0;
    /**
     * Text shown for the inactive state of a toggle. The default is "Inactive".
     * @type {string}
     */
    this.messageToggleInactive = void 0;
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    // value can only be a string
    this._value = typeof newValue === 'number' || typeof newValue === 'string' ? String(newValue) : '';
  }
  get checked() {
    if (this.initialRender) {
      return this.inputElement.checked;
    }
    return this._checked;
  }
  set checked(value) {
    value = Boolean(value);
    this._checked = value;
    if (this.initialRender) {
      this.inputElement.checked = this._checked;
    }
  }
  get ariaDescribedByElements() {
    return [this.template.querySelector('[data-help-message]'), this.template.querySelector('data-toggle-description')];
  }
  get isNativeShadow() {
    return this._isNativeShadow;
  }
  get ariaLabel() {
    return this._ariaLabel;
  }
  set ariaLabel(value) {
    this._ariaLabel = normalizeAriaAttribute(value);
  }
  get inputElement() {
    // cache the input in order to reduce dom queries
    if (!this._cachedInputElement) {
      let inputElement = this.template.querySelector('input');
      this._cachedInputElement = inputElement;
    }
    return this._cachedInputElement;
  }
  get helpMessage() {
    return this._helpMessage;
  }
  set helpMessage(message) {
    this._helpMessage = message;
    reflectAttribute(this, 'invalid', Boolean(message));
  }
  get computedLabelClass() {
    return this.variant === VARIANT.LABEL_HIDDEN ? 'slds-form-element__label slds-assistive-text' : 'slds-form-element__label';
  }
  get i18n() {
    return i18n;
  }
  handleBlur() {
    this.dispatchEvent(new CustomEvent('blur'));
  }
  handleFocus() {
    this.dispatchEvent(new CustomEvent('focus'));
  }
  handleChange(event) {
    this._checked = event.target.checked;
    const changeEvent = new CustomEvent('change', {
      detail: {
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
    if (!this.initialRender) {
      this.inputElement.checked = this.checked;
      this.inputElement.value = this._value;
      this.initialRender = true;
    }
  }
  disconnectedCallback() {
    this._cachedInputElement = undefined;
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(LightningPrimitiveInputToggle, {
  publicProps: {
    accessKey: {
      config: 0
    },
    disabled: {
      config: 0
    },
    label: {
      config: 0
    },
    variant: {
      config: 0
    },
    name: {
      config: 0
    },
    readOnly: {
      config: 0
    },
    required: {
      config: 0
    },
    ariaInvalid: {
      config: 0
    },
    messageToggleActive: {
      config: 0
    },
    messageToggleInactive: {
      config: 0
    },
    value: {
      config: 3
    },
    checked: {
      config: 3
    },
    ariaDescribedByElements: {
      config: 1
    },
    isNativeShadow: {
      config: 1
    },
    ariaLabel: {
      config: 3
    },
    inputElement: {
      config: 1
    },
    helpMessage: {
      config: 3
    }
  },
  fields: ["_checked", "_value", "_ariaLabel", "_cachedInputElement", "_helpMessage", "_messageToggleActive", "_messageToggleInactive", "initialRender"]
});
export default _registerComponent(LightningPrimitiveInputToggle, {
  tmpl: _tmpl,
  sel: "lightning-primitive-input-toggle",
  apiVersion: 59
});