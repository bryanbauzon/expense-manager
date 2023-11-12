import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom67.css";

import _implicitScopedStylesheets from "./new_custom67.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M292 284l-10-17c-4-6-10-10-18-10l-7 2-28 10c-11-10-23-16-37-21l-5-29c-2-10-10-15-20-15h-20c-10 0-18 6-20 16l-5 28c-13 5-25 12-37 22l-28-10-7-2c-7 0-14 4-18 10l-10 17c-5 9-3 19 5 26l24 19c-2 7-2 14-2 21l2 22-23 19c-8 6-10 18-5 26l10 17c4 6 10 10 18 10l7-2 28-10c11 10 23 17 37 21l5 30c2 10 10 17 20 17h20c10 0 18-7 20-17l5-30c14-5 27-13 39-22l26 10 7 2c7 0 14-4 18-10l10-16c5-9 3-20-5-26l-23-19c2-7 2-14 2-21l-2-22 23-19c6-8 8-19 4-27zM157 406c-30 0-55-24-55-55s24-55 55-55c30 0 55 24 55 55s-26 55-55 55zm337-235l-18-15 2-17-2-17 18-15c6-5 8-14 4-21l-8-14c-3-5-9-8-14-8l-6 1-23 9c-9-8-19-14-30-17l-4-24c-2-8-8-13-16-13h-16c-8 0-15 5-16 13l-4 23c-11 4-21 10-30 18l-23-10-6-1c-6 0-11 3-14 8l-8 13c-4 7-2 16 4 21l18 15-2 17 2 17-18 15c-6 5-8 14-4 21l8 14c3 5 9 8 14 8l6-1 23-9c9 8 19 14 30 17l4 23c2 8 8 14 16 14h16c8 0 15-6 16-14l4-24c11-4 22-10 31-18l22 9 6 1c6 0 11-3 14-8l8-13c4-4 2-12-4-18zm-105 13c-24 0-44-20-44-44s20-44 44-44 44 20 44 44-19 44-44 44z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7oss4ed87du";
freezeTemplate(tmpl);
