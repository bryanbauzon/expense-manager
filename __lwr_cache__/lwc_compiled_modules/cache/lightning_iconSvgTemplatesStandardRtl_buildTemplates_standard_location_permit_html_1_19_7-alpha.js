import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./location_permit.css";

import _implicitScopedStylesheets from "./location_permit.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M665 318L551 204a13 13 0 00-9-4 12 12 0 00-13 13v90a34 34 0 0034 34h91a12 12 0 0013-12c1-2 1-4-2-7zm3 90a18 18 0 00-18-17H529a52 52 0 01-51-52V218a18 18 0 00-18-18H287a52 52 0 00-51 52v415a52 52 0 0051 51h177c14 0 17-9 16-25s-6-78 37-128 114-53 124-53 29 0 27-16zM296 308l43-5a2 2 0 002-2l20-39a6 6 0 017 0l19 39 2 2 43 5a3.2 3.2 0 012 6l-32 32v4l7 43c0 1-2 5-6 3l-37-19h-4l-37 19c-2 2-6 0-6-3l6-43v-4l-32-30a14 14 0 013-7zm157 290a18 18 0 01-18 18H323a18 18 0 01-18-18v-17a18 18 0 0118-18h112a18 18 0 0118 18zm94-105a18 18 0 01-18 18H323a18 18 0 01-18-18v-17a18 18 0 0118-18h208a18 18 0 0118 18v18zm95 145a25 25 0 1025 25 27 27 0 00-25-25zm0-84a123 123 0 10122 123 123 123 0 00-122-123zm3 196a5 5 0 01-7 0c-12-11-55-46-55-87a58.8 58.8 0 01117.5 0c-1 41-42 77-55 87z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-630r0ss55hd";
freezeTemplate(tmpl);
