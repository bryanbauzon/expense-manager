import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./registered_model.css";

import _implicitScopedStylesheets from "./registered_model.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M635 417l-4 5a67 67 0 01-67 17l-75 124c-8-7-17-13-28-17l75-124a67 67 0 1199-5zm5 19c-9 8-18 14-29 18l75 124a67 67 0 1028-17zM495 600a66 66 0 00-62-42 67 67 0 1065 83h154a83 83 0 010-33H498zM325 386l89 90c4 4 4 11 0 15l-90 89c-4 4-11 4-15 0l-15-15c-4-4-4-11 0-15l33-33c4-4 1-12-5-12H211c-6 0-11-5-11-11v-21c0-6 5-11 11-11h112c6 0 9-8 5-13l-33-32c-5-5-5-11 0-15l15-15c4-5 10-5 15 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1lbl8o5avr1";
freezeTemplate(tmpl);
