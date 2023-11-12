import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./unmuted.css";

import _implicitScopedStylesheets from "./unmuted.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M415 180c-14 0-25 10-25 24v40c0 70-59 128-131 128s-131-58-131-128v-40c0-14-11-24-25-24s-23 10-23 24v40c0 89 68 162 155 174v34h-41c-14 0-25 10-25 24s11 24 25 24h131c14 0 25-10 25-24s-11-24-25-24h-41v-34a178 178 0 00156-174v-40c0-14-11-24-25-24zM260 324a80 80 0 0080-80V99c0-44-35-79-79-79h-2a79 79 0 00-79 79v145a80 80 0 0080 80z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-191bbmm3s09";
freezeTemplate(tmpl);
