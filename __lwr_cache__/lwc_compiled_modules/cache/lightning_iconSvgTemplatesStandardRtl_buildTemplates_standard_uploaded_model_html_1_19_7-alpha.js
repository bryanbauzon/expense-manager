import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./uploaded_model.css";

import _implicitScopedStylesheets from "./uploaded_model.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M426 292c0 15 4 29 12 41l-89 101c10 6 20 15 27 25l90-101a73 73 0 0068 0 73 73 0 0040-66 74 74 0 10-148 0zm148 55c-7 10-17 19-27 25l89 101a77 77 0 00-12 41 74 74 0 1040-66zM333 447a75 75 0 0141 49h233a94 94 0 000 37H374a74 74 0 11-41-86zm59 232l100-100c4-4 12-4 16 0l100 100c5 5 5 12 0 17l-17 17c-5 5-12 5-17 0l-36-37c-5-5-14-1-14 6v123c0 7-5 12-12 12h-23c-7 0-12-5-13-12V681c0-7-9-10-14-6l-36 37c-5 5-12 5-17 0l-17-17c-4-5-4-12 0-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1su94j6o1qv";
freezeTemplate(tmpl);
