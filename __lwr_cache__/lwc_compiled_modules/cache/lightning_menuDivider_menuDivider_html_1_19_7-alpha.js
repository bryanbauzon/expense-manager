import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./menuDivider.css";

import _implicitScopedStylesheets from "./menuDivider.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  "part": "menu-divider"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element} = $api;
  return [api_element("div", {
    className: $cmp.computedClass,
    attrs: stc0,
    key: 0
  })];
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
tmpl.stylesheetToken = "lwc-1jduft5uekm";
freezeTemplate(tmpl);
