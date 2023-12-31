import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./location.css";

import _implicitScopedStylesheets from "./location.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M775 283l-180-90a32 32 0 00-26 0l-166 84-168-84a31 31 0 00-31 1 29 29 0 00-14 25v450a29 29 0 0016 26l180 90a32 32 0 0027 0l167-83 166 83a25 25 0 0014 4 28 28 0 0016-5 29 29 0 0014-25V309a28 28 0 00-15-26zm-47 57v238a19 19 0 01-25 19c-47-18-9-95-43-138-31-39-71 1-110-60-36-59 13-101 58-124a21 21 0 0117 0l93 47a20 20 0 0110 18zM476 688a21 21 0 01-22-3 66 66 0 01-23-46c0-30-50-20-50-80 0-49-57-61-106-56a19 19 0 01-21-20V300a19 19 0 0127-17l108 53a4 4 0 012 2l4 2c45 26 36 48 17 80-21 36-30 0-60-10s-60 10-50 30 40 0 60 20 20 50 80 30 70-10 90 10a63 63 0 010 90c-17 18-25 55-32 80a20 20 0 01-10 13z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-pduso3ute5";
freezeTemplate(tmpl);
