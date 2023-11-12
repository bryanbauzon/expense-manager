import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom1.css";

import _implicitScopedStylesheets from "./new_custom1.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M294 455a47 47 0 01-69 0L57 277C7 226 7 141 57 89a124 124 0 01180 0l10 12c6 8 19 8 26 0l8-10 1-1c25-26 57-40 90-40 34 0 66 13 90 39 50 51 50 136 0 188 0 1-109 117-168 178z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5c9evpgva7b";
freezeTemplate(tmpl);
