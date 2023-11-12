import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./primitiveInputFile.html";
import { isNativeComponent, reflectAttribute } from 'lightning/utilsPrivate';
import labelRequired from '@salesforce/label/LightningControl.required';
import labelInputFileBodyText from '@salesforce/label/LightningInputFile.bodyText';
import labelInputFileButtonLabel from '@salesforce/label/LightningInputFile.buttonLabel';
const i18n = {
  required: labelRequired,
  inputFileBodyText: labelInputFileBodyText,
  inputFileButtonLabel: labelInputFileButtonLabel
};
class LightningPrimitiveInputFile extends LightningElement {
  constructor(...args) {
    super(...args);
    this._files = null;
    this._helpMessage = '';
    /************************* PUBLIC PROPERTIES *************************/
    this.accept = void 0;
    this.accessKey = void 0;
    this.ariaInvalid = void 0;
    this.disabled = void 0;
    this.label = void 0;
    this.labelClass = void 0;
    this.multiple = void 0;
    this.name = void 0;
    this.readOnly = void 0;
    this.required = void 0;
    this.ariaLabel = void 0;
  }
  get files() {
    return this._files;
  }
  get inputElement() {
    return this.template.querySelector('input');
  }
  get ariaDescribedByElements() {
    return this.template.querySelector('[data-help-message]');
  }
  get ariaLabelledByElements() {
    return [this.template.querySelector('[data-form-label]'), this.template.querySelector('[data-file-selector-label]')];
  }
  get isNativeShadow() {
    return this._isNativeShadow;
  }
  get helpMessage() {
    return this._helpMessage;
  }
  set helpMessage(message) {
    this._helpMessage = message;
    reflectAttribute(this, 'invalid', !!message);
  }

  /************************* PRIVATE GETTERS *************************/

  get i18n() {
    return i18n;
  }

  /************************** EVENT HANDLERS **************************/

  handleDropFiles(event) {
    this._files = event.dataTransfer && event.dataTransfer.files;
    this.dispatchEvent(new CustomEvent('change'));
    // drop doesn't trigger focus/blur, so use event
    // to call reportValidity instead of interacting state
    this.dispatchEvent(new CustomEvent('reportvalidity'));
  }
  handleBlur() {
    this.dispatchEvent(new CustomEvent('blur'));
  }
  handleFocus() {
    this.dispatchEvent(new CustomEvent('focus'));
  }
  handleFileClick() {
    this.inputElement.value = null;
  }
  handleChange() {
    this._files = this.inputElement.files;
    this.dispatchEvent(new CustomEvent('change'));
  }

  /************************** LIFECYCLE HOOKS **************************/

  connectedCallback() {
    this._isNativeShadow = isNativeComponent(this);
    this.dispatchEvent(new CustomEvent('privateprimitiveconnected', {
      detail: {
        isNativeShadow: this.isNativeShadow
      }
    }));
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(LightningPrimitiveInputFile, {
  publicProps: {
    accept: {
      config: 0
    },
    accessKey: {
      config: 0
    },
    ariaInvalid: {
      config: 0
    },
    disabled: {
      config: 0
    },
    label: {
      config: 0
    },
    labelClass: {
      config: 0
    },
    multiple: {
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
    ariaLabel: {
      config: 0
    },
    files: {
      config: 1
    },
    inputElement: {
      config: 1
    },
    ariaDescribedByElements: {
      config: 1
    },
    ariaLabelledByElements: {
      config: 1
    },
    isNativeShadow: {
      config: 1
    },
    helpMessage: {
      config: 3
    }
  },
  fields: ["_files", "_helpMessage"]
});
export default _registerComponent(LightningPrimitiveInputFile, {
  tmpl: _tmpl,
  sel: "lightning-primitive-input-file",
  apiVersion: 59
});