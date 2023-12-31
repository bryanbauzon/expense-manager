import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./variation_products.css";

import _implicitScopedStylesheets from "./variation_products.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M450 282a11 11 0 007-12V50a13 13 0 00-14-14h-28a13 13 0 00-14 14v168a73 73 0 0149 64zm-157 1h11a74 74 0 0157-68V50a13 13 0 00-14-14h-54a13 13 0 00-14 14v220a12 12 0 0014 13zM166 37h-14a13 13 0 00-14 14v220a13 13 0 0014 14h14a13 13 0 0014-14V50a14 14 0 00-14-13zm-77 0H35a12 12 0 00-14 13v220a14 14 0 0014 14h54a13 13 0 0014-14V50a13 13 0 00-14-13zm142-1h-1a13 13 0 00-14 14v220c-1 8 5 13 15 13a13 13 0 0014-14V50a13 13 0 00-14-14zm228 358a41 41 0 00-40 33h-54a5 5 0 00-4 5v4a43 43 0 01-2 11c-1 2 2 5 4 5h58a38 38 0 0037 24 42 42 0 0041-41 41 41 0 00-40-41zM336 288a40 40 0 0053 38l28 52c2 2 4 3 6 2a29 29 0 0114-6 5 5 0 002-6l-30-55a37 37 0 009-25 41 41 0 10-82 0zm15 58a100 100 0 01-14-8c-2-2-5-1-6 2l-28 54a13 13 0 00-6-1 41 41 0 1028 11l28-52a9 9 0 00-2-6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-32hhsav2nu9";
freezeTemplate(tmpl);
