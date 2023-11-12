import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./helptext.html";
import labelButtonAlternativeText from '@salesforce/label/LightningHelptext.buttonAlternativeText';
import { isValidName } from 'lightning/iconUtils';
import { normalizeString } from 'lightning/utilsPrivate';
import { TooltipType } from 'lightning/tooltipLibrary';
const DEFAULT_BUTTON_ALT_TEXT = labelButtonAlternativeText;
const DEFAULT_ICON_NAME = 'utility:info';
const DEFAULT_ICON_VARIANT = 'bare';

/**
 * An icon with a text popover used for tooltips.
 */
class LightningHelptext extends LightningElement {
  constructor(...args) {
    super(...args);
    // TODO: future refactoring to remove this.state convention
    this.state = {
      iconName: DEFAULT_ICON_NAME,
      iconVariant: DEFAULT_ICON_VARIANT,
      alternativeText: DEFAULT_BUTTON_ALT_TEXT
    };
    /**
     * Text to be shown in the popover.
     * @type {string}
     * @param {string} value - The plain text string for the tooltip
     */
    this.content = void 0;
    /**
     * Reserved for internal use only.
     * Should be set to -1 if button should not
     * be focused during tab navigation and should
     * be set to 0 if button should be focused.
     * @type {number}
     */
    this.tabIndex = void 0;
  }
  set iconName(value) {
    this.state.iconName = value;
  }

  /**
   * The Lightning Design System name of the icon used as the visible element.
   * Names are written in the format 'utility:info' where 'utility' is the category,
   * and 'info' is the specific icon to be displayed.
   * The default is 'utility:info'.
   * @type {string}
   * @param {string} value the icon name to use
   * @default utility:info
   */
  get iconName() {
    if (isValidName(this.state.iconName)) {
      return this.state.iconName;
    }
    return DEFAULT_ICON_NAME;
  }
  set iconVariant(value) {
    this.state.iconVariant = value;
  }

  /**
   * Changes the appearance of the icon.
   * Accepted variants include inverse, warning, error.
   * @type {string}
   * @param {string} value the icon variant to use
   * @default bare
   */
  get iconVariant() {
    // NOTE: Leaving a note here because I just wasted a bunch of time
    // investigating why both 'bare' and 'inverse' are supported in
    // lightning-primitive-icon. lightning-icon also has a deprecated
    // 'bare', but that one is synonymous to 'inverse'. This 'bare' means
    // that no classes should be applied. So this component needs to
    // support both 'bare' and 'inverse' while lightning-icon only needs to
    // support 'inverse'.
    return normalizeString(this.state.iconVariant, {
      fallbackValue: DEFAULT_ICON_VARIANT,
      validValues: ['bare', 'error', 'inverse', 'warning']
    });
  }

  /**
   * The assistive text for the button icon. The default is "Help".
   * Screen readers announce the assistive text and help text content as {alternativeText} button {content}.
   * If not set, screen readers announce "Help button {content}".
   * The text should describe the function of the icon, for example, "Show help text".
   *
   * @type {string}
   * @param {string} value The assistive text to set
   * @default Help
   */
  get alternativeText() {
    return this.state.alternativeText;
  }
  set alternativeText(value) {
    // typeof 'string' check prevents <lightning-helptext alternative-text>
    //   from setting 'true' as the a11y help text
    // lwc treats above alternative-text as: true (typeof 'boolean')
    //   we want to prevent 'true' or empty string as a11y text, instead default to 'Help'
    if (value && typeof value === 'string' && value.trim() !== '') {
      this.state.alternativeText = value;
    } else {
      // warn why they can't unset the value
      // eslint-disable-next-line no-console
      console.warn(`<lightning-helptext> Invalid alternativeText value: ${value}`);
    }
  }

  /**
   * Sets focus on the button.
   */
  focus() {
    this.template.querySelector('lightning-button-icon').focus();
  }

  // Get the variant to be applied to button based on the icon variant
  get computedButtonVariant() {
    switch (this.iconVariant) {
      case 'inverse':
        return 'bare-inverse';
      default:
        return 'bare';
    }
  }

  // Get the class to be applied to icon based on the icon variant
  get computedIconClass() {
    switch (this.iconVariant) {
      case 'error':
        return 'slds-icon-text-error';
      case 'warning':
        return 'slds-icon-text-warning';
      default:
        return '';
    }
  }

  /**
   * Set lightning-button-icon tooltips to be created with toggle events
   * and without the title attribute computed from alternative text (see W-12496300)
   * @param {*} event
   */
  handleButtonIconRegister(event) {
    event.stopPropagation();
    event.detail.setTooltipType(TooltipType.Toggle);
    event.detail.showTitle(false);
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(LightningHelptext, {
  publicProps: {
    content: {
      config: 0
    },
    tabIndex: {
      config: 0
    },
    iconName: {
      config: 3
    },
    iconVariant: {
      config: 3
    },
    alternativeText: {
      config: 3
    }
  },
  publicMethods: ["focus"],
  track: {
    state: 1
  }
});
export default _registerComponent(LightningHelptext, {
  tmpl: _tmpl,
  sel: "lightning-helptext",
  apiVersion: 59
});