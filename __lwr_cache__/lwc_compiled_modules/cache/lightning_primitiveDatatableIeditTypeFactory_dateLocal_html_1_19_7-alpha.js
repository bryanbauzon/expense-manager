import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dateLocal.css";

import _implicitScopedStylesheets from "./dateLocal.scoped.css?scoped=true";

import _lightningInput from "lightning/input";
import {registerTemplate} from "lwc";
const stc0 = {
  "datatable-inline-edit": true
};
const stc1 = {
  "data-inputable": "true"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element} = $api;
  return [api_custom_element("lightning-input", _lightningInput, {
    classMap: stc0,
    attrs: stc1,
    props: {
      "type": "date",
      "label": $cmp.columnLabel,
      "name": "dt-inline-edit-dateLocal",
      "variant": "label-hidden",
      "value": $cmp.editedValue
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
tmpl.stylesheetToken = "lwc-7aij18u9lbr";
freezeTemplate(tmpl);
