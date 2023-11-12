import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom3.css";

import _implicitScopedStylesheets from "./new_custom3.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 164a96 96 0 100 192 96 96 0 000-192zm240 96c0-28-67-42-78-67-10-26 27-83 8-103s-77 18-102 7c-26-10-40-77-68-77s-42 67-67 78c-26 10-83-27-103-8s18 77 7 102c-10 26-77 40-77 68s67 42 78 67c10 26-27 83-8 103 19 19 77-18 102-7 25 10 39 78 67 78s42-67 67-78c26-10 83 26 102 7s-18-77-7-102c12-26 79-40 79-68zM260 404c-79 0-144-65-144-144s65-144 144-144 144 65 144 144-65 144-144 144z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5sggi1osb7j";
freezeTemplate(tmpl);
