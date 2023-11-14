import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./constant.css";

import _implicitScopedStylesheets from "./constant.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M491 77c-3-3-6-4-10-4-38-2-77 1-115 2H231c-41 0-74 9-105 37-20 18-39 44-54 67l-2 9c0 8 7 15 15 15 9 0 11-6 15-12a100 100 0 0192-45A590 590 0 0187 340c-20 22-54 44-61 74-8 31 24 39 47 30 30-12 49-43 64-70 19-33 36-68 50-103l44-104c9-21 11-21 33-21h59c-22 48-43 97-62 146-15 37-42 92-23 132s72 25 101 5c29-21 49-54 65-86 3-6 6-12 4-19-2-6-8-9-14-9-14 0-16 16-21 26-8 17-26 32-45 29-44-6-5-86 3-107a740 740 0 0127-65c5-12 10-25 17-37 8-15 8-15 26-16 15-1 59 7 72-1 11-7 17-33 22-52a20 20 0 00-4-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1sjip9ss10q";
freezeTemplate(tmpl);