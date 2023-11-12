import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./modalBase.css";

import _implicitScopedStylesheets from "./modalBase.scoped.css?scoped=true";

import _lightningButtonIcon from "lightning/buttonIcon";
import _lightningFocusTrap from "lightning/focusTrap";
import {registerTemplate} from "lwc";
const stc0 = {
  "role": "presentation",
  "data-backdrop": ""
};
const stc1 = {
  key: 1
};
const stc2 = {
  "role": "dialog",
  "tabindex": "-1",
  "aria-modal": "true",
  "data-modal": ""
};
const stc3 = {
  "slds-assistive-text": true
};
const stc4 = {
  classMap: {
    "slds-assistive-text": true
  },
  attrs: {
    "aria-live": "polite",
    "role": "status",
    "data-aria-live-message": ""
  },
  key: 4
};
const stc5 = {
  classMap: {
    "slds-modal__container": true
  },
  attrs: {
    "data-container": ""
  },
  key: 5
};
const stc6 = {
  "data-close-button": ""
};
const stc7 = {
  attrs: {
    "data-slot": ""
  },
  context: {
    lwc: {
      dom: "manual"
    }
  },
  key: 7
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, b: api_bind, gid: api_scoped_id, d: api_dynamic_text, t: api_text, c: api_custom_element} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6} = $ctx;
  return [api_element("div", {
    className: $cmp.modalBackdropCssClasses,
    attrs: stc0,
    key: 0
  }), api_custom_element("lightning-focus-trap", _lightningFocusTrap, stc1, [api_element("section", {
    className: $cmp.modalCssClasses,
    attrs: stc2,
    key: 2,
    on: {
      "keydown": _m0 || ($ctx._m0 = api_bind($cmp.handleModalKeyDown)),
      "privatemodalheaderregister": _m1 || ($ctx._m1 = api_bind($cmp.handleHeaderRegister)),
      "privatemodalbodyregister": _m2 || ($ctx._m2 = api_bind($cmp.handleBodyRegister)),
      "privatemodalfooterregister": _m3 || ($ctx._m3 = api_bind($cmp.handleFooterRegister)),
      "privateclose": _m4 || ($ctx._m4 = api_bind($cmp.handlePrivateClose)),
      "privatedisableclosebutton": _m5 || ($ctx._m5 = api_bind($cmp.handlePrivateDisableCloseButton))
    }
  }, [$cmp.showAriaDescribedBy ? api_element("span", {
    classMap: stc3,
    attrs: {
      "id": api_scoped_id("modal-description"),
      "data-aria-description": ""
    },
    key: 3
  }, [api_text(api_dynamic_text($cmp.description))]) : null, $cmp.showAriaLiveMessage ? api_element("span", stc4, [api_text(api_dynamic_text($cmp.ariaLiveMessage))]) : null, api_element("div", stc5, [api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    className: $cmp.computedCloseButtonCssClass,
    attrs: stc6,
    props: {
      "iconName": "utility:close",
      "variant": $cmp.computedCloseButtonVariant,
      "alternativeText": $cmp.closeButtonAltText,
      "size": "large",
      "disabled": $cmp.disableCloseButton
    },
    key: 6,
    on: {
      "click": _m6 || ($ctx._m6 = api_bind($cmp.handleCloseClick))
    }
  }), api_element("div", stc7)])])])];
  /*LWC compiler v3.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-6o6likdls9f";
freezeTemplate(tmpl);
