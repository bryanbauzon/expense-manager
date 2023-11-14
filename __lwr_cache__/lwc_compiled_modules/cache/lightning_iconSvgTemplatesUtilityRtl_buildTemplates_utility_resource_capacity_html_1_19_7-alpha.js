import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./resource_capacity.css";

import _implicitScopedStylesheets from "./resource_capacity.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M379 250c-67 0-121 55-121 122s54 121 121 121a121.5 121.5 0 000-243zm85 134h-88v-93s33-2 63 29 25 64 25 64zm-242-11c0-27 9-59 23-83 17-30 36-42 51-65 25-37 30-91 14-131a100 100 0 00-99-64 100 100 0 00-95 70c-16 45-9 100 27 134 15 14 29 36 21 58-7 20-31 29-48 37-39 17-87 41-95 88-8 38 18 78 59 78h171c8 0 13-10 8-16-23-30-37-67-37-106z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2276oaadsms";
freezeTemplate(tmpl);
