import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./key_dates.css";

import _implicitScopedStylesheets from "./key_dates.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M468 196a16 16 0 0116 15v241a48 48 0 01-46 48H84a48 48 0 01-48-46V212a16 16 0 0115-16h417zm-214 46v1l-22 69a5 5 0 01-5 4h-69a8 8 0 00-5 13h1l55 41a7 7 0 013 7v1l-26 70a7 7 0 0010 8h1l60-45a7 7 0 017-1l1 1 60 45a7 7 0 0011-7v-1l-27-70a7 7 0 012-7l1-1 55-41a7 7 0 00-3-13h-70a7 7 0 01-6-3v-1l-21-68a7 7 0 00-13-2zM364 20a32 32 0 0132 32v16h40a48 48 0 0148 48v16a16 16 0 01-16 16H52a16 16 0 01-16-16v-16a48 48 0 0148-48h40V52a32 32 0 0164 0v16h144V52a32 32 0 0132-32z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7d43b4f0n07";
freezeTemplate(tmpl);
