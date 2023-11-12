import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom27.css";

import _implicitScopedStylesheets from "./new_custom27.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M65 356h390c8 0 15-7 15-15V104c0-24-20-44-45-44H95c-25 0-45 20-45 44v237c0 9 7 15 15 15zm30-237c0-8 7-15 15-15h300c8 0 15 7 15 15v178c0 8-7 15-15 15H110c-8 0-15-7-15-15zm390 282H320c-8 0-15 7-15 15s-7 15-15 15h-60c-8 0-15-7-15-15s-7-15-15-15H35c-8 0-15 7-15 15 0 24 20 44 45 44h390c25 0 45-20 45-44 0-9-7-15-15-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-73rrnhikal7";
freezeTemplate(tmpl);
