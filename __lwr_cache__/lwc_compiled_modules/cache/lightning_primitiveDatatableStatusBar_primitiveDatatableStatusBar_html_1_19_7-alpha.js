import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveDatatableStatusBar.css";

import _implicitScopedStylesheets from "./primitiveDatatableStatusBar.scoped.css?scoped=true";

import _lightningPrimitiveDatatableTooltip from "lightning/primitiveDatatableTooltip";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-docked-form-footer": true,
    "slds-is-absolute": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_align-center": true
  },
  key: 1
};
const stc2 = {
  "slds-button": true
};
const stc3 = {
  "slds-button": true,
  "slds-button_neutral": true
};
const stc4 = {
  "type": "button"
};
const stc5 = {
  "slds-button": true,
  "slds-button_brand": true,
  "save-btn": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, b: api_bind, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, [$cmp.showError ? api_custom_element("lightning-primitive-datatable-tooltip", _lightningPrimitiveDatatableTooltip, {
    classMap: stc2,
    props: {
      "size": "small",
      "variant": "error",
      "header": $cmp.error.title,
      "content": $cmp.error.messages,
      "alternativeText": $cmp.i18n.error,
      "offset": $cmp.bubbleOffset
    },
    key: 2
  }) : null, api_element("button", {
    classMap: stc3,
    attrs: stc4,
    key: 3,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleCancelButtonClick))
    }
  }, [api_text(api_dynamic_text($cmp.i18n.cancel))]), api_element("button", {
    classMap: stc5,
    attrs: stc4,
    key: 4,
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleSaveButtonClick))
    }
  }, [api_text(api_dynamic_text($cmp.i18n.save))])])])];
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
tmpl.stylesheetToken = "lwc-rp323k19n3";
freezeTemplate(tmpl);
