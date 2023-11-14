import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_line_outcome_data.css";

import _implicitScopedStylesheets from "./contract_line_outcome_data.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M413 191H304a47 47 0 01-46-47V36c0-9-7-16-16-16H87a47 47 0 00-47 47v373c0 25 21 46 47 46h168a151 151 0 01-34-93h-28c-8 0-15-7-15-15v-16c0-8 7-15 15-15h34a152 152 0 0124-47h-58c-8 0-15-7-15-16v-15c0-9 7-16 15-16h116a151 151 0 01120-2v-44c0-9-7-16-16-16zM115 394c-14 0-24-11-24-24s10-24 24-24 24 10 24 24-11 24-24 24zm303-250h-83a31 31 0 01-31-31V31c0-6 5-11 11-11 3 0 5 1 8 3l102 103c3 2 4 4 4 8 0 6-5 10-11 10zM115 301c-14 0-24-11-24-25s10-24 24-24 24 11 24 24c0 14-11 24-24 24zm4-106l34-18a2 2 0 013 0l34 18c2 1 5-1 5-3l-7-38 1-3 28-28c3-1 1-4-1-5l-38-5-3-2-17-35c-1-2-4-2-6 0l-17 35-2 2-38 5c-3 1-4 4-4 5l28 28 1 3-6 38c-1 2 2 4 5 3zm362 195a109 109 0 11-219 0 109 109 0 01219 0zm-45-37c5 5 6 14 0 19l-41 44c-2 3-6 4-10 4s-7-1-10-4l-18-20-31 31c-5 6-14 6-19 0a14 14 0 010-19l41-41a14 14 0 0120 0l17 20 31-33a14 14 0 0120-1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-612fnc9ahcb";
freezeTemplate(tmpl);
