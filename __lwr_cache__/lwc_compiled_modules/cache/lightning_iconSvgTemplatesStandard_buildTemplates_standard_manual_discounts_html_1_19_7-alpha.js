import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./manual_discounts.css";

import _implicitScopedStylesheets from "./manual_discounts.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M450 305c-4 0-8 1-11 4a22 22 0 00-9 22c0 5 2 8 5 12a21 21 0 0023 5c4-2 7-5 9-9a22 22 0 002-20 21 21 0 00-19-14zm99 81c-4 0-8 2-11 4a22 22 0 00-3 34 18 18 0 0023 5l9-9c3-4 3-8 3-12a22 22 0 00-13-20zm85-62l18 22a36 36 0 010 47l-15 17c-7 9-12 20-13 32l-2 23c-1 8-4 16-10 22-6 7-14 10-22 11l-26 2c-9 0-16 4-23 9l-20 18a33 33 0 01-45 0l-18-16c-7-7-17-12-28-13l-23-2c-8-1-16-4-21-11-6-6-10-14-10-22l-2-27c0-10-4-18-9-26l-17-20a37 37 0 011-47l15-19c7-8 11-18 12-29l1-24c1-9 5-17 11-23 5-6 13-9 21-10l25-2c10 0 19-4 26-11l19-17a33 33 0 0145 0l17 17c8 7 18 11 28 12l24 2c8 1 15 5 21 11s9 14 10 23l2 28c0 8 3 16 9 23zm-216-19c-4 6-7 14-7 22h1a41 41 0 0011 29 39 39 0 0027 12c8 0 15-3 22-7 6-5 11-11 14-19 3-7 4-15 2-23a40 40 0 00-30-32c-8-1-16-1-23 3-7 3-13 8-17 15zm48 143l2-1 80-156v-3l-1-2h-12l-2 1-1 1-81 156v3l1 1h15zm116-17c4-7 7-15 7-23h-1c0-11-4-21-11-28-7-8-17-12-27-12-8 0-15 2-22 6-6 5-11 11-14 19a43 43 0 008 44c6 6 13 10 20 11s15 1 23-2c7-3 13-8 17-15zM213 599h45c7 0 14 6 13 14v144c0 21-16 38-36 38h-22c-7 0-13-7-13-14V612c0-7 6-13 13-13zm547 55c19 2 32 20 39 37 3 8-2 13-8 17a9133 9133 0 00-145 51l-31 11-54 18a326 326 0 01-159 4l-11-3c-20-3-39-7-58-7h-3c-13-2-23-14-23-27V636c0-15 12-28 27-28h123c0-1 17 0 30 6 12 5 31 7 34 7h70c16 0 30 14 30 31s-13 32-30 32h-91c-10 0-17 7-17 17s8 18 17 18h51c25-2 49-10 72-19l54-20 54-20 3-1c8-3 17-6 26-5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-49jdje6dt1j";
freezeTemplate(tmpl);
