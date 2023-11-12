import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./key.css";

import _implicitScopedStylesheets from "./key.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M65 120a8 8 0 0114 5v4a160 160 0 00158 163h7a15 15 0 0115 10l45 128a21 21 0 01-1 12l-24 55a8 8 0 01-10 4l-53-25a8 8 0 01-5-10l6-26a8 8 0 00-4-10l-18-8a9 9 0 01-4-10l7-25a8 8 0 00-4-11l-12-6a8 8 0 01-4-10l8-23a8 8 0 00-4-10l-24-12a8 8 0 01-4-4l-6-15a111 111 0 01-54-22 117 117 0 01-42-125 102 102 0 0113-29zm56 25A113 113 0 01238 20a114 114 0 01100 76 106 106 0 012 65l127 133a14 14 0 015 12v58a8 8 0 01-8 8h-60a8 8 0 01-8-6l-4-26a8 8 0 00-8-8h-20a8 8 0 01-8-6l-4-26a8 8 0 00-8-8h-13a8 8 0 01-8-7l-3-25a8 8 0 00-8-8h-27a7 7 0 01-5-2l-11-12a112 112 0 01-149-93zm95-69a40 40 0 1040 40 40 40 0 00-40-40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5igrlk2b3q2";
freezeTemplate(tmpl);
