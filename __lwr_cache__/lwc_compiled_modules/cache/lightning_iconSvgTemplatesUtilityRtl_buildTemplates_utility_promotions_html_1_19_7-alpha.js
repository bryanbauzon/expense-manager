import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./promotions.css";

import _implicitScopedStylesheets from "./promotions.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M334 287a31 31 0 101 0zM185 170a31 31 0 101 0zm303 58l-26-30a56 56 0 01-13-33l-3-40a51 51 0 00-47-48l-35-3a74 74 0 01-42-18l-27-23a52 52 0 00-67 0l-28 23a66 66 0 01-37 15l-38 3a51 51 0 00-48 47l-2 34a75 75 0 01-18 42l-23 26a51 51 0 000 67l24 30a62 62 0 0114 36l3 39a51 51 0 0047 47l35 3a72 72 0 0142 18l26 23a52 52 0 0067 0l30-25a59 59 0 0135-13l40-3a51 51 0 0048-47l3-33a81 81 0 0120-46l20-24a51 51 0 000-68zm-360-26a58 58 0 1158 58 58 58 0 01-59-58zm84 171a5 5 0 01-4 3h-17a4 4 0 01-4-3 4 4 0 010-4l121-223a5 5 0 014-2h18a4 4 0 012 6zm180-55a58 58 0 11-58-58 58 58 0 0158 58z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5u75bchjp8";
freezeTemplate(tmpl);
