import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./inspector_panel.css";

import _implicitScopedStylesheets from "./inspector_panel.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M38 453h450c8 0 15-7 15-15v-83c0-8-7-15-15-15H38c-8 0-15 7-15 15v83c0 8 7 15 15 15zm0-386c-8 0-16 7-16 15v204c0 7 8 14 16 14h448c8 0 15-7 15-15V82c0-8-7-15-15-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6h8rs67k4sf";
freezeTemplate(tmpl);
