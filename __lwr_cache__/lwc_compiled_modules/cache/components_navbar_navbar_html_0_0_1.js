import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./navbar.css";

import _implicitScopedStylesheets from "./navbar.scoped.css?scoped=true";

import _lightningIcon from "lightning/icon";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h2${3}>Expense Manager</h2>`;
const stc0 = {
  key: 0
};
const stc1 = {
  key: 3
};
const stc2 = {
  classMap: {
    "slds-m-right_small": true,
    "slds_truncate": true
  },
  key: 4
};
const stc3 = {
  "href": "javascript:void(0);"
};
const stc4 = {
  classMap: {
    "logo-icon": true
  },
  props: {
    "iconName": "utility:logout",
    "alternativeText": "logout",
    "size": "small",
    "title": "logout"
  },
  key: 6
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, d: api_dynamic_text, t: api_text, h: api_element, b: api_bind, c: api_custom_element} = $api;
  const {_m0} = $ctx;
  return [api_element("nav", stc0, [api_static_fragment($fragment1(), 2), api_element("div", stc1, [api_element("span", stc2, [api_text(api_dynamic_text($cmp.username))]), api_element("a", {
    attrs: stc3,
    key: 5,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.logout))
    }
  }, [api_custom_element("lightning-icon", _lightningIcon, stc4)])])])];
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
tmpl.stylesheetToken = "lwc-38n2s6kncb0";
freezeTemplate(tmpl);
