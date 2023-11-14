import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./feedback.css";

import _implicitScopedStylesheets from "./feedback.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M791 565c-1-4-1-9 2-12 17-31 27-66 27-103 0-116-99-210-220-210-52 0-100 18-138 47a272 272 0 01218 263c0 36-7 71-21 102 20-5 39-13 57-24 4-2 8-3 12-1l64 23c11 4 22-7 19-19zM400 340c-121 0-220 94-220 210 0 37 10 72 28 103 2 4 3 8 2 12l-21 67c-4 12 7 23 19 19l64-23c4-1 9-1 12 1 34 20 73 31 116 31 121 0 220-94 220-210s-99-210-220-210zM280 590c-22 0-40-18-40-40s18-40 40-40 40 18 40 40-18 40-40 40zm120 0c-22 0-40-18-40-40s18-40 40-40 40 18 40 40-18 40-40 40zm120 0c-22 0-40-18-40-40s18-40 40-40 40 18 40 40-18 40-40 40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-56orre82095";
freezeTemplate(tmpl);
