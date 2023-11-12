import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveDatatableIeditInputWrapper.css";

import _implicitScopedStylesheets from "./primitiveDatatableIeditInputWrapper.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<abbr aria-hidden="true" class="slds-required slds-col slds-grow-none slds-m-right_xx-small${0}"${2}>*</abbr>`;
const stc0 = {
  key: 2
};
const stc1 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, s: api_slot} = $api;
  return [$cmp.required ? api_static_fragment($fragment1(), 1) : null, api_slot("", stc0, stc1, $slotset)];
  /*LWC compiler v3.0.0*/
}
export default registerTemplate(tmpl);
tmpl.slots = [""];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-ghj0lkvct7";
freezeTemplate(tmpl);
