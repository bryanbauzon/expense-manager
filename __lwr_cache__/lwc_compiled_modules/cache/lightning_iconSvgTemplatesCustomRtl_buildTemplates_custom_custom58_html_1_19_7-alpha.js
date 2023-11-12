import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom58.css";

import _implicitScopedStylesheets from "./custom58.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M670 460c-17 0-31-14-30-32 1-16 15-28 32-28h86c4 0 7-2 9-5 8-14 14-28 19-41 2-7-2-14-9-14h-64c-16 0-31-12-32-28-1-17 13-32 30-32h80c6 0 10-4 10-10v-30c0-11-9-20-20-20H674c-30 0-54 24-54 54v1c0 56-37 106-90 120v-83a60 60 0 10-89-52c0 22 12 41 30 52v84c-53-14-90-64-90-120v-1c0-30-24-54-54-54H220c-11 0-20 9-20 20v30c0 6 4 10 10 10h78c16 0 31 12 32 28 1 17-13 32-30 32h-65c-7 0-12 7-9 14 5 13 11 27 19 41 2 3 5 5 9 5h86c16 0 31 12 32 28 1 17-13 32-30 32h-24c-9 0-14 12-6 18 42 36 98 62 170 62v228c0 16 12 31 28 32 17 1 32-13 32-30V540c72 0 128-26 170-62 7-6 3-18-6-18h-26z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-16sfmfumc45";
freezeTemplate(tmpl);
