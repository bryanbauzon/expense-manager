import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./expense_report_entry.css";

import _implicitScopedStylesheets from "./expense_report_entry.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M370 316h204a18 18 0 0019-19v-38a57 57 0 00-55-57H408a56 56 0 00-55 57v38a17 17 0 0017 19zm303 229a127 127 0 10127 127 127 127 0 00-127-127zm82 92l-93 93a19 19 0 01-26 0l-46-46a9 9 0 010-13l13-13a9 9 0 0113 0l32 32 81-81a9 9 0 0113 0l13 13c7 6 2 12 0 15zM598 523a39 39 0 01-27-38H373a40 40 0 01-40 40v85a40 40 0 0140 40h136a167 167 0 0189-127zm-126 96a54 54 0 1154-54 54 54 0 01-54 54zm204-369h-19a8 8 0 00-9 9v38a76 76 0 01-74 76H370a75 75 0 01-74-76v-38a8 8 0 00-9-9h-19a56 56 0 00-55 57v406a57 57 0 0055 57h272a170 170 0 01-31-77H326a34 34 0 01-34-34V478a34 34 0 0134-34h294a34 34 0 0134 34v29a134 134 0 0120-1 158 158 0 0158 11V307a57 57 0 00-56-57z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5glh7hpg6dj";
freezeTemplate(tmpl);
