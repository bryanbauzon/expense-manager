import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_forecast.css";

import _implicitScopedStylesheets from "./work_forecast.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M449 118s-24-48-77-48-79 50-79 50a80 80 0 00-67 0s-26-50-78-50-77 49-77 49-50 110-51 210 65 121 96 121c34 0 115-14 110-126a33 33 0 0131-19 40 40 0 0137 19c-4 113 76 126 110 126 30 0 97-24 96-122s-51-210-51-210zM122 408a60 60 0 1160-60 60 60 0 01-60 60zm276 0a60 60 0 1159-60 60 60 0 01-60 60z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-763agelp50d";
freezeTemplate(tmpl);
