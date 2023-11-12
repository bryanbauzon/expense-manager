import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./formattedPhone.css";

import _implicitScopedStylesheets from "./formattedPhone.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {ti: api_tab_index, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [$cmp.showLink ? !$cmp.disabled ? api_element("a", {
    attrs: {
      "href": $cmp.link,
      "tabindex": api_tab_index($cmp.tabIndex)
    },
    key: 0
  }, [api_text(api_dynamic_text($cmp.formattedPhoneNumber))]) : null : null, $cmp.showLink ? $cmp.disabled ? api_element("span", stc0, [api_text(api_dynamic_text($cmp.formattedPhoneNumber))]) : null : null];
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
tmpl.stylesheetToken = "lwc-lp8dh5tfv2";
freezeTemplate(tmpl);
