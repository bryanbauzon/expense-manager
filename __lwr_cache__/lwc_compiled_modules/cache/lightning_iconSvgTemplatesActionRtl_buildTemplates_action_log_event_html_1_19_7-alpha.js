import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./log_event.css";

import _implicitScopedStylesheets from "./log_event.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M387 402l-48 16-13 2c-14 0-28-7-37-18s-11-27-8-41l16-57 75-75c3-3 1-9-4-9H55c-8 0-15 7-15 15v185c0 22 18 40 40 40h280c22 0 40-18 40-40v-8c0-7-7-12-13-10zM55 180h330c8 0 15-7 15-15v-25c0-22-18-40-40-40h-30V90c0-16-13-30-30-30-16 0-30 13-30 30v10H170V90c0-16-13-30-30-30-16 0-30 13-30 30v10H80c-22 0-40 18-40 40v25c0 8 7 15 15 15zm380 51c-2-2-5-2-7 0l-94 94-14 47c-1 5 3 9 8 8l47-14 94-94c2-2 2-5 0-7zm80-29l-18-18c-6-6-17-6-24 0l-16 17c-2 2-2 5 0 7l34 34c2 2 5 2 7 0l17-16c7-6 7-17 0-24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-28t66nuuh16";
freezeTemplate(tmpl);
