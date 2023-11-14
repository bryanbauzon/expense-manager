import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_consumed.css";

import _implicitScopedStylesheets from "./product_consumed.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M771 552h-37a19 19 0 00-19 18v125a19 19 0 01-19 19H284a19 19 0 01-19-19V570a19 19 0 00-19-19h-37a19 19 0 00-19 19v169a50 50 0 0050 50h500a50 50 0 0050-50V570a19 19 0 00-19-18zm-293 82a18 18 0 0026 0l169-169a18 18 0 000-26l-27-26a18 18 0 00-26 0l-70 70a13 13 0 01-21-9V208a23 23 0 00-20-19h-38a19 19 0 00-18 19v265a13 13 0 01-22 9l-70-70a18 18 0 00-26 0l-26 27a18 18 0 000 27z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5hl7oce6lee";
freezeTemplate(tmpl);
