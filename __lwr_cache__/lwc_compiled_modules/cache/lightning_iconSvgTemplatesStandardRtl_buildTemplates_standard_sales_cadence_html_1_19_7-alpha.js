import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sales_cadence.css";

import _implicitScopedStylesheets from "./sales_cadence.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M611 639l2-2c6-7 6-19-2-26l-48-48c-3-2-4-6-4-9 0-7 6-13 13-13h207c11-1 20-9 21-20v-40c0-11-10-20-21-20H574c-3 0-7-2-9-4-5-5-5-14 0-19l48-48 2-2c6-7 6-19-2-26l-28-28-2-2c-7-6-19-6-26 2L404 487l-2 2c-6 7-6 19 2 26l153 152c7 7 19 7 26 0zM303 501l64-63 48-48 2-2c6-7 6-19-2-26l-28-28-2-2c-7-6-19-6-26 2L206 487l-2 2c-6 7-6 19 2 26l153 152c7 7 19 7 26 0l28-28 2-2c6-7 6-19-2-26l-48-48z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-49bp26i5vl7";
freezeTemplate(tmpl);
