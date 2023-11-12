import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./primitiveInputCheckboxButton.html";
import { reflectAttribute, normalizeBoolean, isNativeComponent } from 'lightning/utilsPrivate';
class LightningPrimitiveInputColor extends LightningElement {
  constructor(...args) {
    super(...args);
    this.ariaLabel = void 0;
    this.ariaInvalid = void 0;
    this.accessKey = void 0;
    this.name = void 0;
    this.required = void 0;
    this.readOnly = void 0;
    this.label = void 0;
    this._checked = false;
    this._disabled = false;
    this._helpMessage = '';
    this.rendered = false;
    this.initialValueSet = false;
  }
  /**
   * If present, the checkbox is selected.
   * @type {boolean}
   * @default false
   */
  get checked() {
    // checkable inputs can be part of a named group, in that case there won't be a change event thrown and so
    // the internal tracking _checked would be out of sync with the actual input value.
    if (this.initialValueSet) {
      return this.inputElement.checked;
    }
    return this._checked;
  }
  set checked(value) {
    this._checked = normalizeBoolean(value);
    if (this.rendered) {
      this.inputElement.checked = this._checked;
    }
    reflectAttribute(this, 'checked', this.checked);
  }

  /**
   * If present, the input field is disabled and users cannot interact with it.
   * @type {boolean}
   * @default false
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = normalizeBoolean(value);
    reflectAttribute(this, 'disabled', this.disabled);
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
  get ariaDescribedByElements() {
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
    this.cachedInputElement = undefined;
    this.initialValueSet = false;
    this.rendered = false;
  }
  renderedCallback() {
    this.rendered = true;
    if (!this.initialValueSet) {
      this.inputElement.checked = this._checked;
      this.initialValueSet = true;
    }
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
  handleClick() {
    if (this.template.activeElement === null) {
      this.template.querySelector("[type='checkbox']").focus();
    }
  }

  /********* EVENT DISPATCHERS *********/

  dispatchChangeEventWithDetail(detail) {
    this.dispatchEvent(new CustomEvent('change', {
      composed: true,
      detail
    }));
  }
  dispatchChangeEvent() {
    const detail = {};
    this._checked = this.inputElement.checked;
    reflectAttribute(this, 'checked', this._checked);
    detail.checked = this._checked;
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
    ariaLabel: {
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
    label: {
      config: 0
    },
    checked: {
      config: 3
    },
    disabled: {
      config: 3
    },
    helpMessage: {
      config: 3
    },
    inputElement: {
      config: 1
    },
    ariaDescribedByElements: {
      config: 1
    },
    isNativeShadow: {
      config: 1
    }
  },
  fields: ["_checked", "_disabled", "_helpMessage", "rendered", "initialValueSet"]
});
export default _registerComponent(LightningPrimitiveInputColor, {
  tmpl: _tmpl,
  sel: "lightning-primitive-input-checkbox-button",
  apiVersion: 59
});