import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom11.css";

import _implicitScopedStylesheets from "./new_custom11.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M278 31l64 135 142 22c16 2 22 23 10 34L391 328l24 148c2 17-14 30-28 22l-127-70-127 70c-14 8-31-5-28-22l24-148L26 222c-11-12-5-32 10-34l142-22 64-135c8-15 29-15 36 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ueqbkqe2li";
freezeTemplate(tmpl);
