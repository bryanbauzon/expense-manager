import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shift_scheduling_operation.css";

import _implicitScopedStylesheets from "./shift_scheduling_operation.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M468 196a16 16 0 0116 16v240a48 48 0 01-48 48H84a48 48 0 01-48-48V212a16 16 0 0116-16h416zm-208 32a120 120 0 10120 120 120 120 0 00-120-120zm23 57l43 42a6 6 0 010 8l-43 41c-3 3-7 0-7-5v-25a50 50 0 00-52 47 52 52 0 000 6h-31a82 82 0 0180-84h3v-25c0-5 4-8 7-5zm81-265a32 32 0 0132 32v16h40a48 48 0 0148 48v16a16 16 0 01-16 16H52a16 16 0 01-16-16v-16a48 48 0 0148-48h40V52a32 32 0 0164 0v16h144V52a32 32 0 0132-32z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-c2c4h63cic";
freezeTemplate(tmpl);
