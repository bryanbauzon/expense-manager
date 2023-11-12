import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bug.css";

import _implicitScopedStylesheets from "./bug.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M196 100h128a15 15 0 0014-18 80 80 0 00-78-62 80 80 0 00-78 62 15 15 0 0014 18zm280 208a24 24 0 0024-26 25 25 0 00-26-22h-70v-40c47-18 80-68 80-127a25 25 0 00-20-25 24 24 0 00-28 24 91 91 0 01-39 78 49 49 0 00-40-22H163a49 49 0 00-40 22 90 90 0 01-40-76 25 25 0 00-22-26 24 24 0 00-26 24c0 60 34 110 80 128v40H45a25 25 0 00-25 22 24 24 0 0024 26h72v40c-46 18-79 68-80 127a25 25 0 0020 25 24 24 0 0028-24 90 90 0 0139-78 144 144 0 0092 95 16 16 0 0021-16V286a25 25 0 0122-26 24 24 0 0126 24v194a16 16 0 0020 15 144 144 0 0093-95 93 93 0 0139 76 25 25 0 0022 26 24 24 0 0026-24c0-60-34-110-80-128v-40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4d5v1spvu7q";
freezeTemplate(tmpl);
