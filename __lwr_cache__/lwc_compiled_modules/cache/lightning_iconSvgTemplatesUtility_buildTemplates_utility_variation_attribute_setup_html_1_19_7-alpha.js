import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./variation_attribute_setup.css";

import _implicitScopedStylesheets from "./variation_attribute_setup.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M236 36a14 14 0 00-15 14v226a13 13 0 0014 14h1a13 13 0 0014-14V49a13 13 0 00-14-13zM91 36H35a13 13 0 00-14 14v226a14 14 0 0014 14h56a13 13 0 0014-14V49a14 14 0 00-14-13zm78 0h-14a13 13 0 00-14 14v226a13 13 0 0014 14h14a13 13 0 0014-14V49a12 12 0 00-14-13zm275 208v2l1 7 5 3 7-5 6-2 5-2V49a13 13 0 00-14-14h-28a13 13 0 00-14 14v158a47 47 0 0132 37zm-127 6l5 2a33 33 0 016-3l1-6v-2a49 49 0 0141-38V49a13 13 0 00-14-13h-56a13 13 0 00-14 14v199a43 43 0 0112-2 49 49 0 0119 3zm157 128a111 111 0 002-17 88 88 0 00-2-17l19-16a18 18 0 004-22l-8-15a18 18 0 00-15-8l-6 1-23 9a83 83 0 00-30-17l-4-24a16 16 0 00-17-12h-17a17 17 0 00-17 12l-4 23a85 85 0 00-31 17l-22-9a10 10 0 00-6-1 18 18 0 00-15 8l-8 14a18 18 0 004 22l19 16a111 111 0 00-2 17 88 88 0 002 17l-19 17a18 18 0 00-4 22l8 16a18 18 0 0015 8l6-1 23-9a83 83 0 0030 17l4 25a17 17 0 0017 14h17a17 17 0 0017-14l4-25a88 88 0 0032-19l22 9a13 13 0 006 1 18 18 0 0015-8l7-13a18 18 0 00-4-22zm-88 41a56 56 0 1156-56 56 56 0 01-56 56zm-1-88a31 31 0 1031 31 31 31 0 00-31-31z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5sk7d5kbqr3";
freezeTemplate(tmpl);
