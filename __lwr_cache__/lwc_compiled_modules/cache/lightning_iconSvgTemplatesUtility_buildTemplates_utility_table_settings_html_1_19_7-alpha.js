import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./table_settings.css";

import _implicitScopedStylesheets from "./table_settings.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M215 200h90c8 0 15-7 15-15v-30c0-8-7-15-15-15h-90c-8 0-15 7-15 15v30c0 8 7 15 15 15zm250-60h-90c-8 0-15 7-15 15v30c0 8 7 15 15 15h90c8 0 15-7 15-15v-30c0-8-7-15-15-15zM55 100h410c8 0 15-7 15-15V35c0-8-7-15-15-15H55c-8 0-15 7-15 15v50c0 8 7 15 15 15zm425 174v-19c0-8-7-15-15-15h-27c13 7 25 16 35 27l7 7zm-280-19v30c0 8 7 15 15 15h7a160 160 0 0160-60h-67c-8 0-15 7-15 15zm47 238a164 164 0 01-35-52c-7 1-12 8-12 15v30c0 8 7 15 15 15h40l-8-8zM145 140H55c-8 0-15 7-15 15v30c0 8 7 15 15 15h90c8 0 15-7 15-15v-30c0-8-7-15-15-15zm0 100H55c-8 0-15 7-15 15v30c0 8 7 15 15 15h90c8 0 15-7 15-15v-30c0-8-7-15-15-15zm0 200H55c-8 0-15 7-15 15v30c0 8 7 15 15 15h90c8 0 15-7 15-15v-30c0-8-7-15-15-15zm0-100H55c-8 0-15 7-15 15v30c0 8 7 15 15 15h90c8 0 15-7 15-15v-30c0-8-7-15-15-15zm216 10c-17 0-30 13-30 30s13 30 30 30c16 0 29-14 30-30-1-17-14-30-30-30z"${3}/><path d="M445 295a120 120 0 10-170 170 120 120 0 00170-170zm-6 95c0 3-1 5-5 5l-12 1-1 1-5 13v2l7 10c1 2 1 5-1 7l-13 13-4 1-3-1-10-7-1-1h-1l-13 5-1 1-1 12c-1 3-5 5-5 5h-19c-3 0-5-1-5-5l-1-12-1-1-13-5h-1l-1 1-10 7-3 1-4-1-13-13a6 6 0 01-1-7l7-10v-2l-5-13-1-1-11-1-5-4v-22c1-3 3-4 5-4l11-1 1-1 5-13v-2l-7-10a6 6 0 011-7l13-13 4-1 3 1 10 7 1 1 13-5 1-1 1-11c0-2 2-4 3-5l3-1h19l1 1c3 1 3 3 3 5l1 11 1 1 13 5h1l1-1 10-7 3-1 3 1 13 13c2 2 2 5 1 7l-7 10v2l5 13 1 1 12 1c3 1 5 2 5 7v18z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-16mmth7f0a9";
freezeTemplate(tmpl);
