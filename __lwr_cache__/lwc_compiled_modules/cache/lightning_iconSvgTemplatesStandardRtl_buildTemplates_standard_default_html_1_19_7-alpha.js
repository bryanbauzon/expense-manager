import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./default.css";

import _implicitScopedStylesheets from "./default.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M446 328c21-21 49-34 81-34 42 0 79 23 99 57 17-7 36-12 56-12 76 1 138 62 138 137a137.4 137.4 0 01-165 134 101.3 101.3 0 01-132 41c-18 40-58 69-106 69-50 0-92-31-108-74-7 1-14 2-22 2a106.3 106.3 0 01-54-198c-7-15-10-31-10-48 0-67 56-122 124-122 41 0 77 19 99 48" opacity=".5"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7ru2s4rb2e6";
freezeTemplate(tmpl);
