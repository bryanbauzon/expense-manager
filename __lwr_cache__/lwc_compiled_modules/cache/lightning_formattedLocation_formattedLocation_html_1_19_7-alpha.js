import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./formattedLocation.css";

import _implicitScopedStylesheets from "./formattedLocation.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text} = $api;
  return [$cmp.isValid ? api_text(api_dynamic_text($cmp.latitude) + ", " + api_dynamic_text($cmp.longitude)) : null];
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
tmpl.stylesheetToken = "lwc-650m0l0tfqg";
freezeTemplate(tmpl);
