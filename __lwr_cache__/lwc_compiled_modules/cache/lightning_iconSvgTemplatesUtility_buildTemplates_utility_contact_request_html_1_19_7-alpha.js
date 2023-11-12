import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contact_request.css";

import _implicitScopedStylesheets from "./contact_request.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M254 270c-6 2-9 9-4 14l44 45c5 5 5 12 0 17l-17 17c-5 5-12 5-17 0L153 255c-5-5-5-12 0-17l107-107c5-5 12-5 17 0l17 17c5 5 5 12 0 17l-45 45c-5 5 4 14 4 14 102 3 181 70 205 161 26-36 42-79 42-125-1-123-108-220-240-220S22 138 22 258c0 38 11 74 29 106 3 5 4 11 2 17l-31 85c-3 8 5 15 13 13l87-33c5-2 11-1 17 2a250 250 0 00280-23c-11-85-80-151-165-155z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-700kd0agtcn";
freezeTemplate(tmpl);
