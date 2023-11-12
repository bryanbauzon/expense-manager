import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./formattedUrl.html";
import { makeAbsoluteUrl } from 'lightning/utilsPrivate';
import { updateRawLinkInfo } from 'lightning/routingService';

/**
 * Displays a URL as a hyperlink.
 */
class LightningFormattedUrl extends LightningElement {
  constructor(...args) {
    super(...args);
    /**
     * Specifies where to open the link. Options include _blank, _parent, _self, and _top.
     * This value defaults to _self.
     * @type {string}
     *
     */
    this.target = void 0;
    /**
     * The text to display when the mouse hovers over the link.
     * A link doesn't display a tooltip unless a text value is provided.
     *
     * @type {string}
     *
     */
    this.tooltip = void 0;
    /**
     * The text to display in the link.
     * @type {string}
     *
     */
    this.label = void 0;
    /**
     * Reserved for internal use. Use tabindex instead to indicate if an element should be focusable.
     * A value of 0 means that the element is focusable and
     * participates in sequential keyboard navigation. A value of -1 means
     * that the element is focusable but does not participate in keyboard navigation.
     * @type {number}
     *
     */
    this.tabIndex = void 0;
    this._url = void 0;
    this._value = void 0;
    this._connected = false;
    this._dispatcher = () => {};
  }
  /**
   * The URL to format.
   * @type {string}
   *
   */
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
    if (this._connected) {
      this.updateLinkInfo(value);
    }
  }
  connectedCallback() {
    this._connected = true;
    this.updateLinkInfo(this.value);
  }
  disconnectedCallback() {
    this._connected = false;
  }

  /**
   * Sets focus on the element.
   */
  focus() {
    if (this.urlAnchor) {
      this.urlAnchor.focus();
    }
  }

  /**
   * Removes keyboard focus from the element.
   */
  blur() {
    if (this.urlAnchor) {
      this.urlAnchor.blur();
    }
  }

  /**
   * Simulates a mouse click on the url and navigates to it using the specified target.
   */
  click() {
    const anchor = this.urlAnchor;
    if (anchor && anchor.click) {
      anchor.click();
    }
  }
  get urlAnchor() {
    if (this._connected && this.hasValue) {
      return this.template.querySelector('a');
    }
    return undefined;
  }
  handleClick(event) {
    this._dispatcher(event);
  }
  updateLinkInfo(url) {
    updateRawLinkInfo(this, {
      url: makeAbsoluteUrl(url),
      target: this.target
    }).then(linkInfo => {
      this._url = linkInfo.url;
      this._dispatcher = linkInfo.dispatcher;
    });
  }
  get computedLabel() {
    const {
      label,
      computedUrl
    } = this;
    return label != null && label !== '' ? label : computedUrl;
  }
  get computedUrl() {
    return this._url || makeAbsoluteUrl(this.value);
  }
  get hasValue() {
    const url = this.value;
    return url != null && url !== '';
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(LightningFormattedUrl, {
  publicProps: {
    target: {
      config: 0
    },
    tooltip: {
      config: 0
    },
    label: {
      config: 0
    },
    tabIndex: {
      config: 0
    },
    value: {
      config: 3
    }
  },
  publicMethods: ["focus", "blur", "click"],
  track: {
    _url: 1,
    _value: 1
  },
  fields: ["_connected", "_dispatcher"]
});
export default _registerComponent(LightningFormattedUrl, {
  tmpl: _tmpl,
  sel: "lightning-formatted-url",
  apiVersion: 59
});