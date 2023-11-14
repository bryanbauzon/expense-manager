import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./budget_category_value.css";

import _implicitScopedStylesheets from "./budget_category_value.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M407 18H52c-3 0-6 1-9 4-2 3-3 6-3 10v44a14 14 0 0013 13h354c3 0 6-1 9-4 2-2 3-6 4-10V32a14 14 0 00-13-13zM130 125H52c-3 0-6 1-9 4-2 2-3 6-3 10v26a14 14 0 0013 13h77c4 0 7-1 10-4 2-2 3-6 3-10v-26a14 14 0 00-13-13zm138 0h-77c-4 0-7 1-10 4-2 2-3 6-3 10v26a14 14 0 0013 13h77c4 0 7-1 10-4 2-2 3-6 3-10v-26a20 20 0 00-3-10c-3-2-6-3-10-3zm139 0h-78c-3 0-7 1-10 4l-3 9v27a14 14 0 0013 13h78c3 0 6-2 9-4l4-10v-26c0-4-2-7-4-10s-6-3-10-3zm-277 89H52c-3 0-6 1-9 4-2 2-3 5-3 9v27l3 9c2 3 6 4 10 4h77c4 0 7-2 10-4 2-3 3-6 3-10v-26c0-4-1-7-4-10-2-2-6-3-9-3zm138 0h-77c-4 0-7 1-10 4-2 2-3 5-3 9v27a14 14 0 0013 13h77c4 0 7-2 10-4 2-3 3-6 3-10v-26c0-4-1-7-3-10l-10-4zm139 0h-78c-3 0-7 1-10 4-2 2-3 5-3 9v27c0 3 1 6 4 9 2 2 5 4 9 4h78c3 0 6-2 9-4l4-10v-26c0-4-2-7-4-10-3-2-6-3-10-3zm-277 88H52c-3 0-6 2-9 4-2 3-3 6-3 10v26c0 4 1 7 3 10 3 2 6 4 10 4h77c4 0 7-2 10-4 2-3 3-6 3-10v-26a14 14 0 00-13-14zm0 90H52c-3 0-6 0-9 3-2 3-3 6-3 10v25a14 14 0 0013 14h77c4 0 7-2 10-4 2-3 3-6 3-10v-26c0-4-1-7-4-10-2-2-5-4-9-4zm328-93H205a29 29 0 00-29 30v140a30 30 0 0030 30h251a30 30 0 0030-30V330a30 30 0 00-30-30zM239 470c0-19-15-34-34-34v-72c20 0 34-15 34-34h184c0 19 15 34 35 34v72c-20 0-35 15-35 34H240zm141-73a49 49 0 11-98 0 49 49 0 0198 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4irhg53qr2e";
freezeTemplate(tmpl);
