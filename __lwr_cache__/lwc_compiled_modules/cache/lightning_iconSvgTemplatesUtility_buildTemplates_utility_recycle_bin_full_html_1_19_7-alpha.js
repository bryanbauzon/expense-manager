import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./recycle_bin_full.css";

import _implicitScopedStylesheets from "./recycle_bin_full.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M442 71L322 90l-6-38a39 39 0 00-44-32l-58 10a39 39 0 00-32 44l6 38-118 19c-8 1-13 9-12 17l5 28c1 8 9 13 17 12l371-60c8-1 13-9 12-17l-5-28c-1-7-9-13-16-12zM283 97l-56 9-5-28c-1-5 2-10 8-11l38-6c5-1 10 2 11 8zm131 113H114c-8 0-15 7-15 15v227c0 27 21 48 48 48h232c27 0 48-21 48-48V225c1-8-5-15-13-15zM238 451l-49 1c-2 0-20 0-32-19-13-21-3-39 12-64l-14-9c-2-1-2-2-2-4s1-2 3-3l38-9 3-1c2 0 3 0 5 3l1 3 8 39c0 2 0 3-2 4h-5l-12-8c-13 22-15 29-12 35 4 6 9 7 9 7l48-1c5 0 9 2 12 6 2 2 2 5 2 7 1 6-5 13-13 13zm35-141l2-4 13-6c-12-23-16-29-23-29-8 0-10 4-11 5l-25 41c-2 4-7 6-12 6l-7-2c-6-4-8-12-4-19l25-41c1-2 11-17 33-17 25 0 34 19 48 45l15-7c2-1 3 0 4 1s2 2 1 4l-12 39-2 2h-3l-39-15c-3 0-3-1-3-3zm101 118c-12 22-32 22-62 21l-1 17c0 2-1 3-2 3s-2 1-4-1l-29-30c-2-2 0-5 0-5l2-2 31-27c2-1 2-2 4-1s2 2 2 4l-1 15c25 0 33-1 36-7s2-11 1-12l-24-42c-2-4-2-9 0-13l5-5c6-4 15-2 19 5l24 42c1 3 10 18-1 38zM214 189l175-29 1 29z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3gkceaelh8n";
freezeTemplate(tmpl);
