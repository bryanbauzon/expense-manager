import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./thanks_loading.css";

import _implicitScopedStylesheets from "./thanks_loading.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M740 350h-87c25-39 23-91-8-123a90 90 0 00-64-27 100 100 0 00-81 45l-10-13a96 96 0 00-71-32c-24 0-46 10-63 27-31 32-33 84-8 123h-88a60 60 0 00-60 60v40c0 11 9 20 20 20h560a20 20 0 0020-20v-40a60 60 0 00-60-60zm-270 0a100 100 0 01-68-26c-15-16-17-42-3-55 7-7 14-8 20-8 10 0 20 5 27 13 17 19 24 51 24 71v5zm128-26a100 100 0 01-68 26v-6c0-20 7-52 24-71a40 40 0 0127-13c5 0 13 1 20 8 13 14 12 39-3 56zm142 206H530v270h172c32 0 58-26 58-58V550a20 20 0 00-20-20zm-500 20v190a60 60 0 0060 60h170V530H260a20 20 0 00-20 20z" opacity=".5"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-2mrgi0pvfvb";
freezeTemplate(tmpl);
