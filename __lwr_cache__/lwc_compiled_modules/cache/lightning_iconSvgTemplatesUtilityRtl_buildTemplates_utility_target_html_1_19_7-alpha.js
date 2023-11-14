import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./target.css";

import _implicitScopedStylesheets from "./target.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M262 23h-2A187 187 0 0073 210v2c0 130 134 250 176 281a20 20 0 0025 0c42-33 175-151 175-281A190 190 0 00262 23zm-2 52a135 135 0 01106 219c-11-16-34-28-56-37a4 4 0 00-3-1 9 9 0 00-7 0 81 81 0 01-40 12 70 70 0 01-40-12 9 9 0 00-7 0 4 4 0 01-3 1c-22 10-45 21-56 38A136 136 0 01260 75z"${3}/><ellipse cx="260" cy="183" rx="56" ry="62"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1hav3i2jc5h";
freezeTemplate(tmpl);
