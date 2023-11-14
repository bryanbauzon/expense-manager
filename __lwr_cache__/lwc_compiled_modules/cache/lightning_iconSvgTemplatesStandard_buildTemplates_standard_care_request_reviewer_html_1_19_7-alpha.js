import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./care_request_reviewer.css";

import _implicitScopedStylesheets from "./care_request_reviewer.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M733 694c-23-9-26-18-26-28a36 36 0 0114-26 64 64 0 0021-50c0-38-23-70-63-70s-63 32-63 70a68 68 0 0021 50 36 36 0 0114 26c0 10-3 19-26 29-33 15-64 33-65 63 0 20 15 41 34 41h172c19 0 34-21 32-41-1-30-32-50-65-64zm-213 64v-2c2-54 52-81 82-95a105 105 0 01-26-71 126 126 0 018-46h-83a12 12 0 01-12-12v-23a12 12 0 0112-12h120a106 106 0 01112-2V256a56 56 0 00-56-56H323a56 56 0 00-56 56v448a56 56 0 0056 56h197zm-31-409a12 12 0 0112-12h152a12 12 0 0112 12v23a11 11 0 01-11 12H501a12 12 0 01-12-12zm-41 205a9 9 0 010 12l-12 12a9 9 0 01-12 0l-34-34-33 33a9 9 0 01-12 0l-12-12a9 9 0 010-12l33-33-33-33a9 9 0 010-12l12-12a9 9 0 0112 0l33 33 34-34a9 9 0 0112 0l12 12a9 9 0 010 12l-34 34zm28-243l-90 90a17 17 0 01-12 5 16 16 0 01-12-5l-43-43a8 8 0 010-12l12-12a8 8 0 0112 0l31 31 77-77a8 8 0 0112 0l12 12c3 4 3 10 1 11z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-1cv9nvgcsqg";
freezeTemplate(tmpl);
