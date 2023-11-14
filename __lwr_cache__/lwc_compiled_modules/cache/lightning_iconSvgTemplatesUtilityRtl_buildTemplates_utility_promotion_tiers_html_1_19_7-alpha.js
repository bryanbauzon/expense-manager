import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./promotion_tiers.css";

import _implicitScopedStylesheets from "./promotion_tiers.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M274 249l-2-1 1 1zm145 139a19 19 0 100 38 19 19 0 000-38zm74-37l-14-17a30 30 0 01-7-18l-2-21a28 28 0 00-25-26l-19-2a40 40 0 01-23-10l-15-13a28 28 0 00-36 1l-16 13c-6 5-13 8-21 8l-19 1a28 28 0 00-27 26l-1 19a41 41 0 01-10 23l-13 14a28 28 0 000 37l14 16a33 33 0 018 19l1 21a28 28 0 0026 26l19 2c8 1 16 4 23 10l14 13c11 9 26 9 37 0l16-14a33 33 0 0118-8l22-2a28 28 0 0026-25l2-18c1-9 5-18 11-25l11-14a28 28 0 000-36zm-209-21a36 36 0 1136 36 36 36 0 01-36-36zm52 116a3 3 0 01-3 1h-11a3 3 0 01-3-1 3 3 0 010-3l83-152a4 4 0 012-1h13c1 1 2 2 1 4l-82 152zm83-3a36 36 0 110-72 36 36 0 010 72zM301 330c0-10 8-19 19-19 10 0 19 9 19 19a19 19 0 01-18 19h-1a19 19 0 01-19-19zm-57-52a56 56 0 00-3 15l-2 18-2 6-13 15c-7 8-11 18-13 28H46a26 26 0 01-22-39l25-43h195zm20-27H65l48-81h207l27 45c-5 3-9 5-13 9l-16 13a5 5 0 01-3 1l-20 2a58 58 0 00-31 11zM129 142l65-109c10-17 35-17 45 0l65 109H129z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7o4e27b9rb7";
freezeTemplate(tmpl);
