import { registerDecorators as _registerDecorators, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./confirm.html";
import LightningInteractiveDialogBase from 'lightning/interactiveDialogBase';
import { parent, instanceName, secure } from 'lightning/overlayUtils';
import LightningOverlay from 'lightning/overlay';
import labelDefault from '@salesforce/label/LightningConfirm.defaultLabel';

/**
 * Create a confirm modal within your component that asks the user
 * to respond before they continue.
 */

class LightningConfirm extends LightningOverlay {
  constructor(...args) {
    super(...args);
    /**
     * value to use for header text in "header" variant
     * or aria-label in "headerless" variant
     * @type {string}
     * @default "Confirm" (translated accordingly)
     */
    this.label = labelDefault;
    /**
     * text to display in body of modal
     */
    this.message = '';
    /**
     * variant to use for alert; may be
     * set to "header" or "headerless"
     */
    this.variant = 'header';
    /**
     * theme to use when variant is "header"
     * valid values are based on SLDS themes and are
     * listed in "themeOptions" of interactiveDialogBase.js
     */
    this.theme = 'default';
  }
  /**
   * Dispatches privateclose event
   * and closes dialog
   */
  close(result) {
    const promise = new Promise(resolve => {
      this.dispatchEvent(new CustomEvent('privateclose', {
        detail: {
          resolve,
          [secure]: true
        },
        bubbles: true
      }));
    });
    super.close(result, promise);
  }

  /**
   * Dispatches privatechildrender event
   * with data parent needs to correctly render
   */
  renderedCallback() {
    const evt = new CustomEvent('privatechildrender', {
      bubbles: true,
      detail: {
        message: this.message,
        label: this.label,
        hideCancel: false,
        showDescription: true,
        getOkValue: () => true,
        getCancelValue: () => false,
        role: 'alertdialog'
      }
    });
    this.dispatchEvent(evt);
  }
  /*LWC compiler v3.0.0*/
}
LightningConfirm[instanceName] = 'lightning-confirm';
LightningConfirm[parent] = LightningInteractiveDialogBase;
_registerDecorators(LightningConfirm, {
  publicProps: {
    label: {
      config: 0
    },
    message: {
      config: 0
    },
    variant: {
      config: 0
    },
    theme: {
      config: 0
    }
  }
});
export default _registerComponent(LightningConfirm, {
  tmpl: _tmpl,
  sel: "lightning-confirm",
  apiVersion: 59
});