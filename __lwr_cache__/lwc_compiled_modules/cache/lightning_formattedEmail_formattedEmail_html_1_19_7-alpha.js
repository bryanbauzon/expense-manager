import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./formattedEmail.css";

import _implicitScopedStylesheets from "./formattedEmail.scoped.css?scoped=true";

import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import {registerTemplate} from "lwc";
const stc0 = {
  props: {
    "iconName": "utility:email",
    "size": "x-small"
  },
  key: 1
};
const stc1 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 2
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {ti: api_tab_index, c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [$cmp.hasValue ? api_element("a", {
    attrs: {
      "href": $cmp.href,
      "tabindex": api_tab_index($cmp.tabIndex)
    },
    key: 0
  }, [!$cmp.hideIcon ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc0) : null, !$cmp.hideIcon ? api_element("span", stc1, [api_text(api_dynamic_text($cmp.i18n.emailLabel))]) : null, api_text(" " + api_dynamic_text($cmp.computedLabel))]) : null];
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
tmpl.stylesheetToken = "lwc-6dhblsr4nda";
freezeTemplate(tmpl);
