import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./primitiveInputRadio.html";
import { classSet } from 'lightning/utils';
import { VARIANT } from 'lightning/inputUtils';
import { isNativeComponent } from 'lightning/utilsPrivate';
class LightningPrimitiveInputRadio extends LightningElement {
  constructor(...args) {
    super(...args);
    this.variant = void 0;
    this.ariaInvalid = void 0;
    this.accessKey = void 0;
    this.name = void 0;
    this.required = void 0;
    this.readOnly = void 0;
    this.disabled = void 0;
    this.label = void 0;
    this.ariaLabel = void 0;
    this.helpMessage = void 0;
  }
  get checked() {
    return this._checked;
  }

  /**
   * Sets the checked state of the input and reflects the attribute if required.
   */
  set checked(value) {
    this._setChecked(value);
  }
  get ariaDescribedByElements() {
    return this.template.querySelector('[data-help-message]');
  }
  get isNativeShadow() {
    return this._isNativeShadow;
  }
  get inputElement() {
    if (!this._cachedInputElement) {
      let inputElement = this.template.querySelector('input');
      this._cachedInputElement = inputElement;
    }
    return this._cachedInputElement;
  }
  get isLabelHidden() {
    return this.variant === VARIANT.LABEL_HIDDEN;
  }
  get computedLabelClass() {
    return classSet('slds-form-element__label').add({
      'slds-assistive-text': this.isLabelHidden
    }).toString();
  }
  _setChecked(value) {
    value = Boolean(value);
    this._checked = value;
    if (this.rendered && this.inputElement.checked !== this._checked) {
      this.inputElement.checked = this._checked;
    }
  }
  handleBlur() {
    this.dispatchEvent(new CustomEvent('blur'));
  }
  handleFocus() {
    this.dispatchEvent(new CustomEvent('focus'));
  }
  handleChange(event) {
    this._setChecked(event.target.checked);
    const changeEvent = new CustomEvent('change', {
      bubbles: true,
      composed: true,
      detail: {
        checked: event.target.checked
      }
    });
    this.dispatchEvent(changeEvent);
  }
  connectedCallback() {
    this._isNativeShadow = isNativeComponent(this);
  }
  renderedCallback() {
    if (!this.rendered) {
      this.inputElement.checked = this.checked;
    }
    this.rendered = true;
  }
  disconnectedCallback() {
    this._cachedInputElement = undefined;
    this.rendered = false;
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(LightningPrimitiveInputRadio, {
  publicProps: {
    variant: {
      config: 0
    },
    ariaInvalid: {
      config: 0
    },
    accessKey: {
      config: 0
    },
    name: {
      config: 0
    },
    required: {
      config: 0
    },
    readOnly: {
      config: 0
    },
    disabled: {
      config: 0
    },
    label: {
      config: 0
    },
    ariaLabel: {
      config: 0
    },
    helpMessage: {
      config: 0
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
    inputElement: {
      config: 1
    }
  }
});
export default _registerComponent(LightningPrimitiveInputRadio, {
  tmpl: _tmpl,
  sel: "lightning-primitive-input-radio",
  apiVersion: 59
});