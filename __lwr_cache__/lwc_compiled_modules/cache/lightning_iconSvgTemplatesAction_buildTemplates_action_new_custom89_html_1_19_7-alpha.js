import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom89.css";

import _implicitScopedStylesheets from "./new_custom89.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M323 207c-3-4-10-3-12 2-10 14-19 34-19 59v88c0 13-10 24-24 24-13 0-24-10-24-24V83c0-61-54-71-93-56-10 3-20 10-27 18-5 6-10 10-18 13-14 3-39-10-52-18-7-4-17-2-21 4L23 58c-6 7-3 18 4 23 15 10 39 25 58 28 28 5 54-4 74-23l-1 1c6-5 15-13 22-4 16 24-48 129-48 281v13c0 65 66 121 130 124 69 3 126-52 126-120 0-34 13-57 26-70 3-3 3-8 0-11zm153 76c-6 0-12-2-17-7L331 149c-10-10-10-25 0-34 10-10 25-10 34 0l128 128c10 10 10 25 0 34-5 4-11 6-17 6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6b8gru4uak5";
freezeTemplate(tmpl);
