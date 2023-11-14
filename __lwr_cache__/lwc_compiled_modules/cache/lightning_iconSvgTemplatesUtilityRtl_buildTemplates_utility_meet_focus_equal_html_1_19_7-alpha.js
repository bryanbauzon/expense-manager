import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./meet_focus_equal.css";

import _implicitScopedStylesheets from "./meet_focus_equal.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M463 112a37 37 0 0137 37v222a37 37 0 01-37 37H194a57 57 0 0053-37h207a9 9 0 009-10V177a9 9 0 00-9-9H190a78 78 0 00-68-37h-4a37 37 0 0132-19zm-341 47a53 53 0 0153 52 42 42 0 010 5 54 54 0 01-18 41 29 29 0 00-11 21c0 8 3 15 18 22l11 5 7 3 7 4c18 10 33 21 34 39a29 29 0 01-26 30H49a29 29 0 01-29-30v-1c0-20 17-32 38-42l7-3 10-4c20-8 22-15 22-23a33 33 0 00-12-21 54 54 0 01-18-41 53 53 0 0148-57 59 59 0 016 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-75dgns2c85r";
freezeTemplate(tmpl);
