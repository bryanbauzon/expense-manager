import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom55.css";

import _implicitScopedStylesheets from "./new_custom55.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M125 333h98c8 0 15-7 15-15V99c0-16-15-29-30-29h-80c-10 0-17 7-17 17v232c-1 7 6 14 14 14zm330-219v234c0 16-14 29-30 29H95c-17 0-30-13-30-29V114c-25 0-45 20-45 44v219c0 24 20 44 45 44h142c8 0 15 7 15 15s7 15 15 15h45c8 0 15-7 15-15s7-15 15-15h142c25 0 45-20 45-44V158c1-24-19-44-44-44zM298 333h95c10 0 17-7 17-17V85c0-8-7-15-15-15h-82c-15 0-30 13-30 29v219c-1 8 6 15 15 15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2c7qqguhv92";
freezeTemplate(tmpl);
