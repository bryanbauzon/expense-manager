import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./user_role.css";

import _implicitScopedStylesheets from "./user_role.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M383 272a114 114 0 10114 114 115 115 0 00-114-114zm20 124a24 24 0 01-9-2l-43 43a14 14 0 01-9 4 10 10 0 01-9-4 14 14 0 010-19l43-43a29 29 0 01-2-9 35 35 0 0134-38 24 24 0 019 2c2 0 2 2 1 3l-20 19a3 3 0 000 5l13 13a4 4 0 006 0l19-19c1-1 4-1 4 1a37 37 0 012 9 36 36 0 01-39 35zM252 498c22 0 10-15 10-15a154 154 0 01-34-97 150 150 0 0114-64 8 8 0 012-3c7-14-7-15-7-15a121 121 0 00-19-1A197 197 0 0024 471c0 10 3 28 34 28h191l3-1z"${3}/><circle cx="217" cy="149" r="129"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1nuhn1r7d19";
freezeTemplate(tmpl);
