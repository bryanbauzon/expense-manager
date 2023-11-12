import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./spinner.html";
import { classSet } from 'lightning/utils';
import { normalizeString as normalize, isCSR } from 'lightning/utilsPrivate';
const DEFAULT_SIZE = 'medium';
const DEFAULT_VARIANT = 'base';

/**
 * Displays an animated spinner.
 */
class LightningSpinner extends LightningElement {
  constructor(...args) {
    super(...args);
    /**
     * The alternative text used to describe the reason for the wait and need for a spinner.
     * @type {string}
     */
    this.alternativeText = void 0;
    this._originalSize = DEFAULT_SIZE;
    this._privateSize = DEFAULT_SIZE;
    this._originalVariant = void 0;
    this._privateVariant = DEFAULT_VARIANT;
    this._altText = '';
  }
  /**
   * The size of the spinner. Accepted sizes are xx-small, x-small, small, medium, and large. This value defaults to medium.
   * @type {string}
   * @default medium
   */
  get size() {
    return this._originalSize;
  }
  set size(val) {
    this._originalSize = val;
    this._privateSize = this.normalizeSize(val);
    this.setAttribute('size', this._privateSize);
  }
  /**
   * The variant changes the appearance of the spinner.
   * Accepted variants include base, brand, and inverse. The default is base.
   * @type {string}
   * @default base
   */
  get variant() {
    return this._originalVariant;
  }
  set variant(val) {
    this._originalVariant = val;
    this._privateVariant = this.normalizeVariant(val);
    if (this._privateVariant !== DEFAULT_VARIANT) {
      this.setAttribute('variant', this._privateVariant);
    }
  }
  connectedCallback() {
    this.classList.add('slds-spinner_container');
    if (isCSR) {
      this.template.addEventListener('mousewheel', this.stopScrolling);
      this.template.addEventListener('touchmove', this.stopScrolling);
    }
  }
  renderedCallback() {
    // [W-10320761] We set the _altText in the next tick because screen readers are not reading out
    // the text when the text along the aria-live container is inserted into the DOM together.
    // It is only working when only aria-live container is setup on load and later the content changes
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    setTimeout(() => {
      this._altText = this.alternativeText;
    }, 0);
  }
  normalizeVariant(variant) {
    return normalize(variant, {
      fallbackValue: DEFAULT_VARIANT,
      validValues: ['base', 'brand', 'inverse']
    });
  }
  normalizeSize(size) {
    return normalize(size, {
      fallbackValue: DEFAULT_SIZE,
      validValues: ['xx-small', 'x-small', 'small', 'medium', 'large']
    });
  }
  get computedClass() {
    const classes = classSet('slds-spinner');

    // add variant-specific class
    if (this._privateVariant !== DEFAULT_VARIANT) {
      classes.add(`slds-spinner_${this._privateVariant}`);
    }
    // add size-specific class
    classes.add(`slds-spinner_${this._privateSize}`);
    return classes.toString();
  }

  // alternativeText validation
  get validAlternativeText() {
    const hasAlternativeText = !!this.alternativeText;

    // if we have an empty value output a console warning
    if (!hasAlternativeText) {
      // eslint-disable-next-line no-console
      console.warn(`<lightning-spinner> The alternativeText attribute should not be empty. Please add a description of what is causing the wait.`);
    }
    return hasAlternativeText;
  }

  // prevent scrolling
  stopScrolling(event) {
    event.preventDefault();
  }
  /*LWC compiler v3.0.0*/
}
LightningSpinner.validationOptOut = ['class'];
_registerDecorators(LightningSpinner, {
  publicProps: {
    alternativeText: {
      config: 0
    },
    size: {
      config: 3
    },
    variant: {
      config: 3
    }
  },
  fields: ["_originalSize", "_privateSize", "_originalVariant", "_privateVariant", "_altText"]
});
export default _registerComponent(LightningSpinner, {
  tmpl: _tmpl,
  sel: "lightning-spinner",
  apiVersion: 59
});