import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom33.css";

import _implicitScopedStylesheets from "./new_custom33.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M372 193H155c-8 0-15 7-15 15v59c0 8 7 15 15 15h218c8 0 15-7 15-15v-59c0-8-7-15-16-15zm-104 67c-13 0-22-10-22-22 0-13 10-22 22-22s22 10 22 22-10 22-22 22zM485 90H35c-8 0-15 7-15 15v15c0 16 13 30 30 30v266c0 7 7 14 15 14h15c8 0 15-7 15-15V149h338v266c0 8 7 15 15 15h15c8 0 15-7 15-15V149h-8c16 0 30-13 30-30v-15c0-7-7-14-15-14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-14b8c2lvvg7";
freezeTemplate(tmpl);
