import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./filter.css";

import _implicitScopedStylesheets from "./filter.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M254 339c-6 6-6 15 0 21l116 116c6 6 15 6 21 0l115-115c6-6 6-15 0-21l-22-22c-6-6-15-6-21 0l-36 36c-7 6-17 2-17-7V215c0-8-7-15-15-15h-30c-8 0-15 7-15 15v132c0 9-11 13-17 7l-36-36c-6-6-15-6-21 0zM9 125c0 8 7 15 15 15h370c8 0 15-7 15-15V95c0-8-7-15-15-15H24c-8 0-15 7-15 15zm0 120c0 8 7 15 15 15h270c8 0 15-7 15-15v-30c0-8-7-15-15-15H24c-8 0-15 7-15 15v30zm0 120c0 8 7 15 15 15h170c8 0 15-7 15-15v-30c0-8-7-15-15-15H24c-8 0-15 7-15 15v30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-342auaq1re7";
freezeTemplate(tmpl);
