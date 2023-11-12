import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./field_sales.css";

import _implicitScopedStylesheets from "./field_sales.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 20A190 190 0 0070 210c0 133 136 253 178 285a20 20 0 0025 0c42-32 177-152 177-284A190 190 0 00260 20zm0 336a146 146 0 11146-146 146 146 0 01-146 146zm-56-230a40 40 0 1040 40 40 40 0 00-40-40zm0 62a21 21 0 1121-22 21 21 0 01-21 22zm18 110a4 4 0 01-3 0h-12a3 3 0 01-3 0 3 3 0 010-4l93-171a3 3 0 013-2h14a3 3 0 011 4zm94-85a40 40 0 1040 40 40 40 0 00-40-40zm0 62a21 21 0 1121-21 21 21 0 01-21 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2qn1653nmff";
freezeTemplate(tmpl);
