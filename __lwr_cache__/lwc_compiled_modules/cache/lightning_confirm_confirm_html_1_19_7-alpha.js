import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./confirm.css";

import _implicitScopedStylesheets from "./confirm.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 0
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [api_element("p", stc0, [api_text(api_dynamic_text($cmp.message))])];
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
tmpl.stylesheetToken = "lwc-3iopcnhehba";
freezeTemplate(tmpl);
