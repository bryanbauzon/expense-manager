import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./money.css";

import _implicitScopedStylesheets from "./money.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M301 261a60 60 0 0133-53 74 74 0 00-75-69 76 76 0 00-75 75c0 41 34 75 75 75 15 0 30-5 41-13v-15z"${3}/><path d="M301 364v-19c0-7 1-13 3-19H128c0-29-23-53-53-53V161c29 0 53-23 53-53h263c0 29 23 53 53 53v40h38c7 0 13 1 19 3V97c0-25-20-45-45-45H65c-25 0-45 20-45 45v242c0 25 20 45 45 45h240c-2-6-4-13-4-20zm199 85c0 10-10 19-20 19H360a20 20 0 01-19-19v-19a20 20 0 0119-19h121c10 0 19 9 19 19v19z"${3}/><path d="M500 365c0 10-10 19-20 19H360a20 20 0 01-19-19v-19a20 20 0 0119-19h121c10 0 19 9 19 19v19zm0-85c0 10-10 19-20 19H360a20 20 0 01-19-19v-19a20 20 0 0119-19h121c10 0 19 9 19 19v19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4h9jaidi6l8";
freezeTemplate(tmpl);
