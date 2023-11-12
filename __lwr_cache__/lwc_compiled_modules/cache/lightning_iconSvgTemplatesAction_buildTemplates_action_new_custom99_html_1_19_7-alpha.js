import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom99.css";

import _implicitScopedStylesheets from "./new_custom99.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M452 166H318c-4-9-10-17-17-24l50-64c8-10 6-25-4-33s-26-6-34 4l-55 71-14-1-13 1-56-71c-8-10-23-12-34-4s-11 23-3 33l50 64c-7 7-13 15-17 24H68c-26 0-48 21-48 47v220c0 26 22 47 48 47h384c26 0 48-21 48-47V213c0-26-22-47-48-47zm-64 251c0 9-7 16-16 16H84c-9 0-16-7-16-16V229c0-9 7-16 16-16h288c9 0 16 7 16 16zm56-78c-14 0-24-10-24-24s10-24 24-24 24 10 24 24-10 24-24 24zm0-79c-14 0-24-10-24-23s10-24 24-24 24 10 24 24c0 13-10 23-24 23z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6j97hh1gblf";
freezeTemplate(tmpl);
