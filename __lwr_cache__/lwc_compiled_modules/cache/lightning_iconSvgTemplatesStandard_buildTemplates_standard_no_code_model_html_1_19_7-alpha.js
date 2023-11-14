import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./no_code_model.css";

import _implicitScopedStylesheets from "./no_code_model.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M591 353a95 95 0 01-121 64l-94 143c-11-11-24-20-39-26l93-143a95 95 0 11161-37zm-9 56c-12 11-25 20-40 26l93 143a95 95 0 0031 150l2 1a95 95 0 107-177l-93-144zM365 578l5 6c8 10 13 22 17 35h205a116 116 0 000 47H387a95 95 0 11-22-88z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-amc7r6cibk";
freezeTemplate(tmpl);
