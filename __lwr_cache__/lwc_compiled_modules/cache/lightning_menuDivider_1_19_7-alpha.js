import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./menuDivider.html";
import { classSet } from 'lightning/utils';
import { normalizeString as normalize } from 'lightning/utilsPrivate';

/**
 * Creates a divider in the list of items for lightning-button-menu.
 */
class LightningMenuDivider extends LightningElement {
  constructor(...args) {
    super(...args);
    this._variant = 'standard';
  }
  connectedCallback() {
    this.setAttribute('role', 'separator');
  }

  /**
   * The variant changes the spacing above and below the divider.
   * Accepted variants include standard and compact. The compact variant
   * decreases the space. This value defaults to standard.
   *
   * @type {string}
   * @default standard
   */
  get variant() {
    return this._variant;
  }
  set variant(value) {
    this._variant = normalize(value, {
      fallbackValue: 'standard',
      validValues: ['standard', 'compact']
    });
  }
  get computedClass() {
    return classSet({
      'slds-has-divider_top-space': this.variant === 'standard',
      'slds-has-divider_top': this.variant === 'compact'
    }).toString();
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(LightningMenuDivider, {
  publicProps: {
    variant: {
      config: 3
    }
  },
  track: {
    _variant: 1
  }
});
export default _registerComponent(LightningMenuDivider, {
  tmpl: _tmpl,
  sel: "lightning-menu-divider",
  apiVersion: 59
});