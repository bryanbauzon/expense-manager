import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./primitiveInputColor.html";
import { classSet } from 'lightning/utils';
import { VARIANT } from 'lightning/inputUtils';
import { reflectAttribute, isNativeComponent } from 'lightning/utilsPrivate';
class LightningPrimitiveInputColor extends LightningElement {
  constructor(...args) {
    super(...args);
    this.hasExternalLabel = void 0;
    this.required = void 0;
    this.accessKey = void 0;
    this.label = void 0;
    this.fieldLevelHelp = void 0;
    this.helptextAlternativeText = void 0;
    this.helpMessage = void 0;
    this.disabled = void 0;
    this.name = void 0;
    this.autocomplete = void 0;
    this.ariaLabel = void 0;
    this.ariaInvalid = void 0;
    this.placeholder = void 0;
    this.pattern = void 0;
    this.variant = void 0;
    this._value = '';
    this.rendered = false;
    this.initialValueSet = false;
  }
  focus() {
    if (this.rendered) {
      this.inputElement.focus();
    }
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = this.normalizeInput(value);
    if (this.rendered && this.inputElement.value !== this._value) {
      this.setInputValue(this._value);
    }
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

  /********* COMPONENT CALLBACKS *********/

  connectedCallback() {
    this._isNativeShadow = isNativeComponent(this);
  }
  disconnectedCallback() {
    this.rendered = false;
    this.initialValueSet = false;
    this.cachedInputElement = undefined;
  }
  renderedCallback() {
    this.rendered = true;
    if (!this.initialValueSet) {
      this.inputElement.value = this._value;
      this.initialValueSet = true;
    }
    reflectAttribute(this, 'disabled', this.disabled);
    reflectAttribute(this, 'invalid', !!this.helpMessage);
    reflectAttribute(this, 'variant', this.variant);
  }

  /**
   * This value is used to compute the label's class which depends on the variant of the component
   */
  get computedColorLabelClass() {
    return classSet('slds-form-element__label slds-color-picker__summary-label').add({
      'slds-assistive-text': this.isLabelHidden
    });
  }
  get isLabelHidden() {
    return this.variant === VARIANT.LABEL_HIDDEN;
  }

  /********* ACTION HANDLERS *********/

  handleBlur() {
    this.dispatchEvent(new CustomEvent('blur'));
  }
  handleFocus() {
    this.dispatchEvent(new CustomEvent('focus'));
  }
  handleChange(event) {
    event.stopPropagation();
    this.dispatchCommitEvent();
    this.dispatchChangeEvent();
  }

  /**
   * This event handler is used whenever a new color is selected and sets the inputElement's
   * value to the selectedColor, while focusing on the color picker button.
   * @param {*} event
   */
  handleColorChange(event) {
    const selectedColor = event.detail.color;
    if (selectedColor !== this.inputElement.value) {
      this.setInputValue(selectedColor);
      this._value = selectedColor;
      this.focus();
      this.dispatchChangeEventWithDetail({
        value: selectedColor
      });
      this.dispatchCommitEvent();
    }
    this.template.querySelector('lightning-primitive-colorpicker-button').focus();
  }
  handleInput(event) {
    event.stopPropagation();
    this.dispatchChangeEvent();
  }

  /********* EVENT DISPATCHERS *********/

  dispatchChangeEventWithDetail(detail) {
    this.dispatchEvent(new CustomEvent('change', {
      composed: true,
      bubbles: true,
      detail
    }));
  }
  dispatchChangeEvent() {
    const detail = {
      value: this.inputElement.value
    };
    this._value = detail.value;
    this.dispatchChangeEventWithDetail(detail);
  }
  dispatchCommitEvent() {
    this.dispatchEvent(new CustomEvent('commit'));
  }

  /********* VALUE UPDATERS *********/

  setInputValue(value) {
    this.inputElement.value = value;
  }

  /********* HELPER METHODS *********/

  /**
   * TODO: lightning/inputUtils methods should be utilized in the second run of the input
   *       breakdown initiative.
   */
  normalizeInput(value) {
    if (typeof value === 'number' || typeof value === 'string') {
      return String(value);
    }
    return '';
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(LightningPrimitiveInputColor, {
  publicProps: {
    hasExternalLabel: {
      config: 0
    },
    required: {
      config: 0
    },
    accessKey: {
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
    helpMessage: {
      config: 0
    },
    disabled: {
      config: 0
    },
    name: {
      config: 0
    },
    autocomplete: {
      config: 0
    },
    ariaLabel: {
      config: 0
    },
    ariaInvalid: {
      config: 0
    },
    placeholder: {
      config: 0
    },
    pattern: {
      config: 0
    },
    variant: {
      config: 0
    },
    value: {
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
  publicMethods: ["focus"],
  fields: ["_value", "rendered", "initialValueSet"]
});
export default _registerComponent(LightningPrimitiveInputColor, {
  tmpl: _tmpl,
  sel: "lightning-primitive-input-color",
  apiVersion: 59
});