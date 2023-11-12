import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./default.css";

import _implicitScopedStylesheets from "./default.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  return stc0;
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
tmpl.stylesheetToken = "lwc-1mebf09dpi9";
freezeTemplate(tmpl);
