import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sort.css";

import _implicitScopedStylesheets from "./sort.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M275 160c6-6 6-15 0-21L161 24c-6-6-15-6-21 0L25 139c-6 6-6 15 0 21l21 21c6 6 15 6 21 0l36-36c6-6 17-2 17 7v212c0 8 7 15 15 15h30c8 0 15-8 15-15V152c0-9 11-13 17-7l36 36c6 6 15 6 21 0l21-21zm220 200l-21-20c-6-6-15-6-21 0l-36 36c-6 6-17 2-17-7V155c0-8-7-15-15-15h-30c-8 0-15 8-15 15v212c0 9-11 13-17 7l-36-36c-6-6-15-6-21 0l-21 22c-6 6-6 15 0 21l115 115c6 6 15 6 21 0l115-115c5-6 5-16-1-21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3qjicj5di1n";
freezeTemplate(tmpl);
