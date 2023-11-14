import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./help_center.css";

import _implicitScopedStylesheets from "./help_center.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M257 20a240 240 0 006 480 240 240 0 00-6-480zm0 32c36-1 70 8 99 23l-32 54c-19-10-41-15-64-15s-45 5-64 15l-32-54c28-14 59-23 93-23zM129 324l-54 32a210 210 0 010-193l54 32c-10 19-15 41-15 64s5 46 15 65zm134 144c-36 1-70-8-99-23l32-54c19 10 41 15 64 15s45-5 64-15l32 54a206 206 0 01-93 23zm-3-93a115 115 0 110-230 115 115 0 010 230zm131-51c10-19 15-41 15-64s-5-45-15-64l54-32a210 210 0 010 193z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5quujjg3vi1";
freezeTemplate(tmpl);
