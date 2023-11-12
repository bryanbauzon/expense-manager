import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./focusTrap.css";

import _implicitScopedStylesheets from "./focusTrap.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {ti: api_tab_index, b: api_bind, h: api_element, s: api_slot} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [api_element("div", {
    attrs: {
      "tabindex": api_tab_index($cmp._bookendTabIndex),
      "data-start": ""
    },
    key: 0,
    on: {
      "focus": _m0 || ($ctx._m0 = api_bind($cmp._focusLastElement))
    }
  }), api_slot("", {
    key: 1,
    on: {
      "focusin": _m1 || ($ctx._m1 = api_bind($cmp._handleFocusIn)),
      "focusout": _m2 || ($ctx._m2 = api_bind($cmp._handleFocusOut))
    }
  }, stc0, $slotset), api_element("div", {
    attrs: {
      "tabindex": api_tab_index($cmp._bookendTabIndex),
      "data-end": ""
    },
    key: 2,
    on: {
      "focus": _m3 || ($ctx._m3 = api_bind($cmp._focusFirstElement))
    }
  })];
  /*LWC compiler v3.0.0*/
}
export default registerTemplate(tmpl);
tmpl.slots = [""];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-654o76jjrnk";
freezeTemplate(tmpl);
