import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_window.css";

import _implicitScopedStylesheets from "./new_window.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20 34v190c0 8 7 17 15 17h29c8 0 16-9 16-17v-79c0-9 10-13 16-7l170 170c6 6 15 6 21 0l21-21c6-6 6-15 0-21L138 96c-7-6-2-16 7-16h79c9 0 16-9 16-17V33c0-8-8-13-16-13H33c-8 0-13 5-13 14zm120 228v198a40 40 0 0040 40h280a40 40 0 0040-40V180a40 40 0 00-40-40H262c-9 0-13 11-7 17l34 34c5 6 13 9 21 9h115c8 0 15 7 15 15v210c0 8-7 15-15 15H215c-8 0-15-7-15-15V311c0-8-3-15-9-21l-34-35c-6-6-17-2-17 7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2reemvtbn40";
freezeTemplate(tmpl);
