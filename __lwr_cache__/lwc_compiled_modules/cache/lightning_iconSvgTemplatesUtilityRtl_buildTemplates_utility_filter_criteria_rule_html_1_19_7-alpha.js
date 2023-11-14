import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./filter_criteria_rule.css";

import _implicitScopedStylesheets from "./filter_criteria_rule.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M274 20a16 16 0 0116 16v112a39 39 0 0042 42h112a16 16 0 0116 16v246a49 49 0 01-48 48H108a49 49 0 01-48-48V68a49 49 0 0148-48h166zm75 240H171a7 7 0 00-5 11l77 91a16 16 0 014 10v58a7 7 0 007 6h12a6 6 0 005-6v-57a15 15 0 015-10l78-91a7 7 0 00-4-12zm-7-240a14 14 0 019 3l106 106a14 14 0 013 9 12 12 0 01-11 12h-85a35 35 0 01-34-34V31a12 12 0 0112-11z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1bjm54pujka";
freezeTemplate(tmpl);
