import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./answered_twice.css";

import _implicitScopedStylesheets from "./answered_twice.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M176 114c-89 0-160 65-160 147 0 26 7 50 20 72 1 3 2 6 1 9l-15 46c-3 9 5 16 14 13l47-16c3-1 7-1 9 1a170 170 0 0084 22c89 0 160-65 160-147s-72-147-160-147zm77 114l-81 80c-3 3-7 5-11 5s-8-1-11-5l-40-39a8 8 0 010-11l11-11c3-3 8-3 11 0l28 28 70-69c3-3 8-3 11 0l11 11c4 3 4 8 1 11zm90-114h-42c47 34 82 88 82 147a190 190 0 01-82 147h42c89 0 160-65 160-147-1-82-72-147-160-147z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1ncf22od9c3";
freezeTemplate(tmpl);
