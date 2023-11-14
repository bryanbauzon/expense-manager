import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./budget_period.css";

import _implicitScopedStylesheets from "./budget_period.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M422 20H44c-4 0-7 2-10 4s-4 7-4 10v48c0 3 2 7 4 10 3 2 6 4 10 4h378c3 0 7-2 9-4 3-3 4-7 4-10V34c0-3-1-7-4-10-2-2-6-4-9-4zM127 134H44c-4 0-7 1-10 4s-4 6-4 10v29c0 3 2 7 4 10 3 2 6 4 10 4h83c3 0 7-2 9-5 3-2 4-6 5-9v-29c0-4-2-7-5-10-2-3-6-4-9-4zm147 0h-83c-3 0-7 1-9 4s-4 6-4 10v29a14 14 0 0014 14h82c4 0 7-2 10-4s4-7 4-10v-29c0-4-1-7-4-10a14 14 0 00-10-4zm148 0h-83a15 15 0 00-14 14v29a14 14 0 0014 14h83c3 0 7-2 9-5 3-2 4-6 4-9v-29c0-4-1-7-4-10-2-3-6-4-9-4zm-295 95H44c-4 0-7 1-10 4s-4 6-4 10v28a15 15 0 0014 15h83c3-1 7-2 9-5s5-6 5-10v-28c0-4-2-7-5-10s-5-4-9-4zm147 0c-3 0 0 0 0 0zm0 0h-83c-3 0-7 1-9 4s-4 6-4 10v28c0 4 1 8 4 10 2 3 6 5 10 5h82c4 0 8-2 10-5s4-6 4-10v-28c0-4-1-7-4-10a14 14 0 00-9-4zm148 0h-83c-4 0-7 1-10 4s-4 6-4 10v28c0 4 2 8 4 10s8 5 10 4a104 104 0 0180 0l3 1c3 0 7-2 9-5 3-2 5-6 5-10v-28c0-4-2-7-4-10s-6-4-10-4zm-295 94H44c-4 0-7 2-10 5s-4 6-4 10v28c0 4 2 7 4 10 3 3 6 4 10 4h83c3 0 7-1 9-4 3-3 4-6 5-10v-28c0-4-2-8-5-10-2-3-6-4-9-5zm0 95H44a15 15 0 00-14 14v29c0 4 2 7 4 10 3 3 6 4 10 4h83c3 0 7-1 9-4 3-3 4-6 5-10v-29a15 15 0 00-14-14zm64-95c-3 0-7 2-9 5s-4 6-4 10v28c0 4 1 7 4 10 2 3 6 4 10 4h65s1-12 9-29c5-9 10-15 13-18 3-4 5-6 4-7-3-2-5-3-8-3h-83zm-9 148c2 3 6 4 9 4h83c4 0 6-1 8-4 2-1 0-3-3-5-3-4-8-9-13-18-8-17-9-30-9-30h-66c-3 0-7 2-9 5l-5 10v28c0 4 2 7 5 10zm211-74l1 5 24 23c2 1 2 3 2 4l-2 5-9 9a7 7 0 01-2 1l-2 1-2-1a5 5 0 01-2-1l-31-31a12 12 0 01-1-5v-49l1-5a7 7 0 014-2h13a6 6 0 014 2l2 5v39zm-50-88a99 99 0 0138-8 100 100 0 01100 100 99 99 0 01-98 99 99.4 99.4 0 01-40-191zm-3 154a74 74 0 0070 7 73 73 0 0046-69 75 75 0 00-89-73 75 75 0 00-59 58 75 75 0 0032 77z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-64cfbt8vcbc";
freezeTemplate(tmpl);
