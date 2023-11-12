import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom31.css";

import _implicitScopedStylesheets from "./new_custom31.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M464 207L425 87c-7-22-29-37-53-37H148c-24 0-46 15-54 37L56 207c-21 6-36 23-36 45v93c0 20 14 37 32 44v65c0 9 7 16 16 16h64c9 0 16-7 16-16v-62h224v62c0 9 7 16 16 16h64c9 0 16-7 16-16v-64c18-6 32-23 32-44v-93c0-23-15-40-36-46zM100 338c-22 0-40-17-40-39s18-39 40-39 40 17 40 39-18 39-40 39zm176-132H118c-6 0-10-5-8-10l30-93c1-3 4-5 7-5h224c3 0 6 2 7 5l30 94c2 5-2 10-8 10H276zm136 132c-22 0-40-17-40-39s18-39 40-39 40 17 40 39-18 39-40 39z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-48m1a35qdm4";
freezeTemplate(tmpl);
