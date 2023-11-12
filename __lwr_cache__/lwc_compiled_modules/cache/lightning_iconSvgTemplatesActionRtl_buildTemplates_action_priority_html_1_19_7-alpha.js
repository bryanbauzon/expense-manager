import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./priority.css";

import _implicitScopedStylesheets from "./priority.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M430 485c0 8 7 15 15 15h30c8 0 15-7 15-15V35c0-8-7-15-15-15h-30c-8 0-15 7-15 15zM30 85v232c0 5 3 10 8 13 167 94 147-82 339-18 6 3 13-2 13-9V70c0-6-4-12-10-14C187-11 205 161 45 77c-7-4-15 1-15 8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2shn4laec8t";
freezeTemplate(tmpl);
