import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./privately_shared.css";

import _implicitScopedStylesheets from "./privately_shared.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M356 395c-7-41-49-62-83-77-15-7-36-15-42-33-4-10-2-20 3-29 9-9 17-17 24-28l5-8c20-29 23-69 11-102a88 88 0 00-83-61h-6a88 88 0 00-83 61c-12 34-9 73 11 102l5 8c7 11 16 19 24 28 4 9 6 19 3 29-6 18-27 26-42 33-34 15-76 36-83 77-7 34 16 68 52 68h236c32 0 55-34 48-68zm57-296a70 70 0 0174 71c0 3-2 4-4 4h-18c-3 0-4-1-4-4v1c0-24-18-44-41-46a44 44 0 00-47 44c0 3-2 4-4 4h-18a4 4 0 01-4-4 70 70 0 0166-70zm74 93H346c-10 0-18 8-18 18v84c0 10 8 18 18 18h141c10 0 18-8 18-18v-84c0-10-8-18-18-18zm-50 87c1 3-1 6-4 6h-33c-3 0-5-3-4-6l8-26a19 19 0 01-9-21c2-8 8-15 17-17 14-3 26 7 26 21a20 20 0 01-9 17l8 26z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5uou54u307i";
freezeTemplate(tmpl);
