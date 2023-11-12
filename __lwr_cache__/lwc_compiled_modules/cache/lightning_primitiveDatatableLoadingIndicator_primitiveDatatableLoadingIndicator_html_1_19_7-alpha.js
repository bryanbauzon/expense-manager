import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveDatatableLoadingIndicator.css";

import _implicitScopedStylesheets from "./primitiveDatatableLoadingIndicator.scoped.css?scoped=true";

import _lightningSpinner from "lightning/spinner";
import {registerTemplate} from "lwc";
const stc0 = [["height", "40px", false]];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element} = $api;
  return [api_custom_element("lightning-spinner", _lightningSpinner, {
    styleDecls: stc0,
    props: {
      "size": "small",
      "variant": "brand",
      "alternativeText": $cmp.i18n.loading
    },
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
tmpl.stylesheetToken = "lwc-2ap4rctsm33";
freezeTemplate(tmpl);
