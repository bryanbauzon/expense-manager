import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./system_and_global_variable.css";

import _implicitScopedStylesheets from "./system_and_global_variable.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M250 465c0-30 14-52 34-65v-30a60 60 0 01-22-30c-4-17 2-36 12-50l9-10a152 152 0 0180-26c22 0 41 9 54 22a73 73 0 0151-23c11 0 22 2 31 7v-2c1-130-107-238-239-238S20 128 20 260a240 240 0 00238 240c-5-10-8-21-8-35zm200-229h-63a355 355 0 00-34-144c53 30 89 83 97 144zM284 79c27 23 51 82 55 158h-55V79zM70 284h63c2 57 15 106 34 144a190 190 0 01-97-144zm63-48H70c8-62 45-114 98-144-20 38-32 88-35 144zm103 206c-27-23-51-82-55-158h55v158zm0-206h-55c4-75 28-134 55-158v158zm228 124c10 0 31-9 31-36s-20-29-26-29c-12 0-24 9-34 27l-23 39h-1l-6-29c-2-11-15-36-42-36s-52 16-52 16c-5 3-8 8-8 14 0 9 7 17 17 17l7-2s21-11 25 0l4 11c6 18 10 39 14 58l-18 25s-20-7-30-7-31 9-31 36 20 29 26 29c12 0 24-9 34-27l22-39 8 36a44 44 0 0043 31s22 0 46-14c6-2 10-9 10-15 0-9-7-17-17-17l-7 2s-18 10-24 2c-5-8-8-19-11-34l-9-41 18-26c4 1 24 9 34 9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-53vmq89t6st";
freezeTemplate(tmpl);
