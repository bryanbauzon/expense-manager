import { registerDecorators as _registerDecorators, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./buttonIcon.html";
import { classSet } from 'lightning/utils';
import { normalizeString as normalize, isCSR } from 'lightning/utilsPrivate';
// remove-next-line-for-c-namespace
import { Tooltip, TooltipType } from 'lightning/tooltipLibrary';
import LightningPrimitiveButton from 'lightning/primitiveButton';
import template from './buttonIcon.html';
const DEFAULT_SIZE = 'medium';
const DEFAULT_VARIANT = 'border';
const DEFAULT_TYPE = 'button';

/**
 * An icon-only HTML button.
 */
class LightningButtonIcon extends LightningPrimitiveButton {
  constructor(...args) {
    super(...args);
    /**
     * The name for the button element.
     * This value is optional and can be used to identify the button in a callback.
     *
     * @type {string}
     */
    this.name = void 0;
    /**
     * The value for the button element.
     * This value is optional and can be used when submitting a form.
     *
     * @type {string}
     */
    this.value = void 0;
    /**
     * Reserved for internal use only.
     * Should be set to -1 if button should not
     * be focused during tab navigation and should
     * be set to 0 if button should be focused.
     * @type {number}
     */
    this.tabIndex = void 0;
    /**
     * The variant changes the appearance of button-icon.
     * Accepted variants include bare, container, brand, border, border-filled, bare-inverse, and border-inverse.
     * This value defaults to border.
     *
     * @type {string}
     * @default border
     */
    this._variant = DEFAULT_VARIANT;
    /**
     * The Lightning Design System name of the icon.
     * Names are written in the format 'utility:down' where 'utility' is the category,
     * and 'down' is the specific icon to be displayed.
     * Only utility icons can be used in this component.
     *
     * @type {string}
     * @required
     */
    this.iconName = void 0;
    /**
     * The class to be applied to the contained icon element.
     * Only Lightning Design System utility classes are currently supported.
     *
     * @type {string}
     */
    this.iconClass = void 0;
    /**
     * The size of the button-icon. For the bare variant, options include x-small, small, medium, and large.
     * For non-bare variants, options include xx-small, x-small, small, and medium.
     * This value defaults to medium.
     *
     * @type {string}
     * @default medium
     */
    this._size = DEFAULT_SIZE;
    /**
     * Specifies the type of button. Valid values are button, reset, and submit.
     * This value defaults to button.
     *
     * @type {string}
     * @default button
     */
    this.type = DEFAULT_TYPE;
    /**
     * The alternative text used to describe the icon. This text should describe what
     * happens when you click the button, for example 'Upload File', not what the icon looks like, 'Paperclip'.
     * @type {string}
     */
    this.alternativeText = void 0;
    // remove-next-line-for-c-namespace
    this._tooltip = null;
    this.tooltipValue = null;
    this.tooltipType = TooltipType.Info;
    this.rendered = false;
    this.showTitle = true;
  }
  get variant() {
    return this._originalVariant;
  }
  set variant(val) {
    this._originalVariant = val;
    this._variant = this.normalizeVariant(val);
    // set the variant attribute on the host
    this.setAttribute('variant', this._variant);
  }
  get size() {
    return this._originalSize;
  }
  set size(val) {
    this._originalSize = val;
    this._size = this.normalizeSize(val);
    // set the size attribute on the host
    this.setAttribute('size', this._size);
  }
  // remove-next-line-for-c-namespace
  set tooltip(value) {
    this.tooltipValue = value;
    if (this._tooltip) {
      this._tooltip.value = value;
    } else if (value && this.rendered) {
      this.createTooltip(value);
    }
  }

  // remove-next-line-for-c-namespace
  /**
   * Text to display when the user mouses over or focuses on the button.
   * The tooltip is auto-positioned relative to the button and screen space.
   * @type {string}
   * @param {string} value - The plain text string for the tooltip
   */
  get tooltip() {
    return this._tooltip ? this._tooltip.value : undefined;
  }
  /**
   * Generate a tooltip with the specified value and current tooltip type
   *
   * @param {*} value - The plain text string for the tooltip
   */
  createTooltip(value) {
    this._tooltip = new Tooltip(value, {
      root: this,
      target: () => this.template.querySelector('button'),
      type: this.tooltipType
    });
    this._tooltip.initialize();
  }

  // this is there because raptor currently doesnt support inheritance
  render() {
    return template;
  }
  get computedTitle() {
    return this.showTitle ? this.title || this.alternativeText || '' : null;
  }
  normalizeVariant(variant) {
    return normalize(variant, {
      fallbackValue: DEFAULT_VARIANT,
      validValues: ['bare', 'brand', 'container', 'border', 'border-filled', 'bare-inverse', 'border-inverse']
    });
  }
  get normalizedType() {
    return normalize(this.type, {
      fallbackValue: DEFAULT_TYPE,
      validValues: ['button', 'reset', 'submit']
    });
  }
  normalizeSize(size) {
    return normalize(size, {
      fallbackValue: DEFAULT_SIZE,
      validValues: ['xx-small', 'x-small', 'small', 'medium', 'large']
    });
  }

  /**
   * Retrieve the base part of the variant
   * Example: for variant "border-inverse", the base is "border".
   */
  get variantBase() {
    return this._variant.split('-')[0];
  }

  /**
   * Retrieve the modifier of the variant
   * Example: for variant "border-inverse", the modifier is "inverse".
   */
  get variantModifier() {
    return this._variant.split('-')[1] || '';
  }
  get computedButtonClass() {
    const classes = classSet(super.computedButtonClass);
    const isBare = this.variantBase === 'bare';
    classes.add('slds-button_icon');
    if (!isBare) {
      // If the variant is not bare, then size the button instead of the icon
      switch (this._size) {
        case 'small':
          classes.add('slds-button_icon-small');
          break;
        case 'x-small':
          classes.add('slds-button_icon-x-small');
          break;
        case 'xx-small':
          classes.add('slds-button_icon-xx-small');
          break;
        case 'large':
          // There is no `large` modifier for buttons so we should drop down one size to `medium`
          console.warn(`<lightning-button-icon> The non-bare variants of buttonIcon do not support a size value of "large". Supported values include "xx-small", "x-small", "small", and "medium". Falling back to size value "medium".`);
        /* falls through */
        case 'medium': // Medium is the default size, and the default size doesn't require a size modifier
        default:
      }
    }
    return classes.add({
      'slds-button_icon-bare': isBare,
      'slds-button_icon-container': this._variant === 'container',
      'slds-button_icon-border': this._variant === 'border',
      'slds-button_icon-border-filled': this._variant === 'border-filled',
      'slds-button_icon-border-inverse': this._variant === 'border-inverse',
      'slds-button_icon-inverse': this._variant === 'bare-inverse',
      'slds-button_icon-brand': this._variant === 'brand'
    }).toString();
  }
  get computedIconClass() {
    const isBare = this.variantBase === 'bare';
    const iconClass = this.iconClass || '';
    const classes = classSet('slds-button__icon');
    classes.add(iconClass);
    if (isBare) {
      // If the variant is bare, then size the icon instead of the button
      switch (this._size) {
        case 'large':
          classes.add('slds-button__icon_large');
          break;
        case 'small':
          classes.add('slds-button__icon_small');
          break;
        case 'xx-small':
          // There is no `xx-small` modifier for bare so we should drop down one size to `x-small`
          console.warn(`<lightning-button-icon> The bare variant of buttonIcon does not support a size value of "xx-small". Supported values include "x-small", "small", "medium", and "large". The default is "medium".`);
        /* falls through */
        case 'x-small':
          classes.add('slds-button__icon_x-small');
          break;
        case 'medium': // Medium is the default size, and the default size doesn't require a size modifier
        default:
      }
    }
    return classes.toString();
  }
  handleFocus() {
    this.dispatchEvent(new CustomEvent('focus'));
  }
  handleBlur() {
    this.dispatchEvent(new CustomEvent('blur'));
  }

  /**
   * Sets focus on the button.
   */
  focus() {
    if (this._connected) {
      this.template.querySelector('button').focus();
    }
  }

  /**
   * Simulates a mouse click on the button.
   */
  click() {
    if (this._connected) {
      this.template.querySelector('button').click();
    }
  }

  /**
   * Once we are connected, we fire a register event so the button-group (or other) component can register
   * the buttons.
   */
  connectedCallback() {
    super.connectedCallback();
    this._connected = true;
    if (isCSR) {
      this.dispatchEvent(new CustomEvent('privatebuttoniconregister', {
        cancelable: true,
        bubbles: true,
        detail: {
          // Tooltip type should be toggle for some consumers like helptext
          setTooltipType: tooltipType => {
            this.tooltipType = tooltipType;
          },
          // Title should not be set for some consumers like helptext (see W-12496300)
          showTitle: showTitle => {
            this.showTitle = showTitle;
          }
        }
      }));
    }
  }
  renderedCallback() {
    // initialize aria attributes in primitiveButton
    super.renderedCallback();

    // remove-next-line-for-c-namespace
    if (this.tooltipValue && !this._tooltip) {
      this.createTooltip(this.tooltipValue);
    }

    // button inherits from primitiveButton, button.css not working in this case.
    // change host style to disable pointer event.
    this.template.host.style.pointerEvents = this.disabled ? 'none' : '';
    this.rendered = true;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._connected = false;
    if (this._tooltip) {
      this._tooltip.disconnect();
    }
  }
  /*LWC compiler v3.0.0*/
}
LightningButtonIcon.delegatesFocus = true;
_registerDecorators(LightningButtonIcon, {
  publicProps: {
    name: {
      config: 0
    },
    value: {
      config: 0
    },
    tabIndex: {
      config: 0
    },
    variant: {
      config: 3
    },
    iconName: {
      config: 0
    },
    iconClass: {
      config: 0
    },
    size: {
      config: 3
    },
    type: {
      config: 0
    },
    alternativeText: {
      config: 0
    },
    tooltip: {
      config: 3
    }
  },
  publicMethods: ["focus", "click"],
  fields: ["_variant", "_size", "_tooltip", "tooltipValue", "tooltipType", "rendered", "showTitle"]
});
export default _registerComponent(LightningButtonIcon, {
  tmpl: _tmpl,
  sel: "lightning-button-icon",
  apiVersion: 59
});