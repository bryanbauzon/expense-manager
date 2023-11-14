import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./cart.css";

import _implicitScopedStylesheets from "./cart.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M201 260h239c7 0 14-5 15-12l44-154c3-11-5-20-15-20H115l-6-23c-3-11-13-18-23-18H46c-13 0-25 10-26 23-1 14 11 26 24 26h23l76 257c3 11 12 18 23 18h282c13 0 25-10 26-23 1-14-11-26-24-26H202c-11 0-20-7-23-17v-1c-5-15 7-30 22-30z"${3}/><circle cx="206" cy="446" r="40"${3}/><circle cx="401" cy="446" r="40"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2m1ft2t6p0p";
freezeTemplate(tmpl);
