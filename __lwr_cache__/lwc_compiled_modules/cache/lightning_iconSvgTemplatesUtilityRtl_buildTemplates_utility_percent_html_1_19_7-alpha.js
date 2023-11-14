import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./percent.css";

import _implicitScopedStylesheets from "./percent.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M395 260a105 105 0 10105 105 105 105 0 00-105-105zm0 161a57 57 0 1156-56 56 56 0 01-56 56zM230 155a105 105 0 10-30 74 105 105 0 0030-74zm-105 56a57 57 0 1140-16 56 56 0 01-40 16zM392 61a8 8 0 00-7-11h-30a8 8 0 00-6 4L129 458a8 8 0 006 12h30a8 8 0 007-4L392 62z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 520 520",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_static_fragment($fragment1(), 2)])];
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
tmpl.stylesheetToken = "lwc-438qkmlduns";
freezeTemplate(tmpl);
