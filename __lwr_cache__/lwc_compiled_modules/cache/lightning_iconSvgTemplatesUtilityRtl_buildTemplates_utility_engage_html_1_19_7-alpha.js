import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./engage.css";

import _implicitScopedStylesheets from "./engage.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M265 43c128 0 233 93 233 210S393 463 265 463c-17 0-33 0-49-4h-6c-20 10-53 19-100 26h-5l-10 2c-18 3-28-19-15-30 13-12 23-27 30-46l-3-3a202 202 0 01-74-150v-5C33 136 137 43 265 43zm70 267H195a20 20 0 100 40h140a20 20 0 100-40zm40-75H155a20 20 0 100 40h220a20 20 0 100-40zm-40-75H195a20 20 0 100 40h140a20 20 0 100-40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7u7319s3f5q";
freezeTemplate(tmpl);
