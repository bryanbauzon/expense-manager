import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tollways.css";

import _implicitScopedStylesheets from "./tollways.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M326 86a175 175 0 10174 174A175 175 0 00326 86zm0 305a131 131 0 11130-131 131 131 0 01-131 131zM64 260a131 131 0 0187-123V91a174 174 0 000 338v-46a131 131 0 01-87-123zm207 29h19c0 11 13 20 29 20s29-9 29-20-10-14-31-20-46-11-46-38a41 41 0 0134-37v-21h29v21a41 41 0 0134 37h-19c0-11-14-19-30-19s-29 8-29 19 10 15 31 20 47 11 47 38a41 41 0 01-34 37v22h-29v-22a41 41 0 01-34-37z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-gk2c7j0sin";
freezeTemplate(tmpl);
