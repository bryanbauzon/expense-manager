import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./merge_field.css";

import _implicitScopedStylesheets from "./merge_field.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M165 399h-7c-23 0-32-13-32-35 0-10 1-19 3-29s3-20 3-31c0-26-11-40-29-44 18-5 29-18 29-44 0-11-1-21-3-31s-3-19-3-29c0-22 8-35 32-35h7c6 0 11-5 11-11s-5-11-11-11h-38c-34 0-59 16-59 53l3 34c2 11 3 23 3 34 0 13-3 27-25 29h-1c-6 0-11 5-11 11s5 10 11 11h2c22 3 25 18 25 29l-3 33-3 33c0 41 25 55 59 55h38c6 0 11-5 11-11-1-6-6-11-12-11zm190 0h7c23 0 32-13 32-35 0-10-1-19-3-29s-3-20-3-31c0-26 11-40 29-44-18-5-29-18-29-44 0-11 1-21 3-31s3-19 3-29c0-22-8-35-32-35h-7c-6 0-11-5-11-11s5-11 11-11h38c34 0 59 16 59 53l-3 34c-2 11-3 23-3 34 0 13 3 27 25 29h1c6 0 11 5 11 11s-5 10-11 11h-2c-22 3-25 18-25 29l3 33 3 33c0 41-25 55-59 55h-38c-6 0-11-5-11-11 1-6 6-11 12-11z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-969ujnobk6";
freezeTemplate(tmpl);
