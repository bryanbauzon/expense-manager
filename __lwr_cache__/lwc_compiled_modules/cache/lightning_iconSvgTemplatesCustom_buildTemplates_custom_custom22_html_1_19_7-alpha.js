import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom22.css";

import _implicitScopedStylesheets from "./custom22.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M777 639l-62-50a60 60 0 00-73-2l-59 43c-8 6-19 5-26-2l-97-88-89-98c-7-7-8-18-2-26l43-59c16-22 15-52-2-73l-50-62c-22-28-64-30-89-5l-54 54c-12 12-18 29-18 45 7 127 65 248 150 333s205 143 333 150c17 1 33-6 45-18l54-54c27-24 24-66-4-88z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-467clhtf487";
freezeTemplate(tmpl);
