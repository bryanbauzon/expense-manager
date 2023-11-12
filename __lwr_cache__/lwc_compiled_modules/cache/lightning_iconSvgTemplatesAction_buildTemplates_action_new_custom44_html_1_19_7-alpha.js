import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom44.css";

import _implicitScopedStylesheets from "./new_custom44.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M407 91c-41-53-75-71-147-71-32 0-71 13-87 16 0-9-7-16-16-16h-32c-9 0-16 7-16 16v64c0 9 7 16 16 16h31c9 0 16-7 16-16h18c13 0 23 10 23 23v1c0 14 10 24 24 24v128c-17 0-31 14-31 32v144c0 26 21 48 47 48h16c26 0 47-22 47-48V308c0-18-14-32-31-32V148c13 0 24-18 24-31v-1c0-12 9-22 21-22 31-2 49 11 57 18 5 4 13 5 17 1 7-5 9-15 3-22z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3t10km4tvho";
freezeTemplate(tmpl);
