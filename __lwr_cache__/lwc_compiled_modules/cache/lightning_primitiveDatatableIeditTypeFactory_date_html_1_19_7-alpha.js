import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./date.css";

import _implicitScopedStylesheets from "./date.scoped.css?scoped=true";

import _lightningInput from "lightning/input";
import {registerTemplate} from "lwc";
const stc0 = {
  "data-inputable": "true"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element} = $api;
  return [api_custom_element("lightning-input", _lightningInput, {
    attrs: stc0,
    props: {
      "type": "datetime",
      "label": $cmp.columnLabel,
      "name": "dt-inline-edit-datetime",
      "variant": "label-hidden",
      "value": $cmp.editedDateValue
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
tmpl.stylesheetToken = "lwc-4eijdk1d5vu";
freezeTemplate(tmpl);
