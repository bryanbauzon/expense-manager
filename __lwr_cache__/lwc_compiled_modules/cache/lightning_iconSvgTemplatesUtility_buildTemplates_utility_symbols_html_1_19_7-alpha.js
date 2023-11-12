import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./symbols.css";

import _implicitScopedStylesheets from "./symbols.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M335 280l10-40h30l-10 40h-30zm-8 30h30l-7 30h30l8-30h32v-30h-25l10-40h30v-30h-23l8-30h-30l-8 30h-30l8-30h-30l-8 30h-32v30h25l-10 40h-35v30h28l-8 30h30l8-30zM40 60h440a20 20 0 0120 20v360a20 20 0 01-20 20H40a20 20 0 01-20-20V80c0-11 9-20 20-20zm198 208l15-12a50 50 0 0010-13 40 40 0 004-19 44 44 0 00-26-40 60 60 0 00-28-6 70 70 0 00-32 7c-10 4-17 11-24 20l-2 2 21 18 2-2c5-6 10-10 15-13 5-2 11-4 18-4s12 2 16 6c4 3 6 8 6 14 0 4-2 8-5 12a90 90 0 01-14 12c-8 5-13 10-17 15-5 5-7 10-7 18v7h32v-3c0-3 0-6 3-8 3-3 7-7 13-10zm-138-88v110h30V180h-30zm15 165a20 20 0 100-40 20 20 0 000 40zm90 0a20 20 0 100-40 20 20 0 000 40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-19psbjods3t";
freezeTemplate(tmpl);
