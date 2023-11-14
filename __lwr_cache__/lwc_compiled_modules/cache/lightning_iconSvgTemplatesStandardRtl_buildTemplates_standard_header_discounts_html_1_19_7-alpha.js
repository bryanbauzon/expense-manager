import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./header_discounts.css";

import _implicitScopedStylesheets from "./header_discounts.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M736 200H264c-35 0-64 28-64 62v476c0 34 29 62 64 62h472c35 0 64-28 64-62V262c0-34-29-62-64-62zm2 109c0 8-8 14-17 14H278c-9 0-15-8-15-16v-20c0-8 8-14 17-14h444c8 0 14 8 14 16zM638 581l-16-18c-5-5-8-12-8-19l-2-23c0-8-4-14-9-19s-12-9-19-9l-21-2c-10-1-19-4-26-10l-16-14a32 32 0 00-40 0l-18 14c-6 6-14 9-23 9l-22 2a29 29 0 00-29 27l-2 20c0 9-4 18-11 25l-13 15c-5 6-8 13-8 20s3 14 7 19l15 18c5 6 8 13 9 21l2 22c0 7 3 14 8 19s12 8 20 9l21 2c9 1 18 4 25 10l16 14a32 32 0 0041 0l18-15c6-5 13-7 21-8l24-2c7 0 14-3 19-8s9-12 10-19l1-19c1-10 5-19 12-27l13-14c5-6 8-13 8-20s-3-14-7-20zm-218-15a35 35 0 0122-31 36 36 0 0138 7c4 5 8 11 9 17s1 14-2 20-7 11-12 15-13 6-20 6a36 36 0 01-25-10c-3-3-6-7-7-11-2-4-3-8-3-13zm51 100l-1 1h-13l-1-1-1-2 1-1 73-130 1-1h12l2 1v2zm109-33c0 7-2 14-6 19-4 6-9 10-16 13s-13 3-20 2c-7-2-13-5-18-10a33 33 0 015-52 36 36 0 0145 5c6 6 10 15 10 24zm-136-83a19 19 0 0124 3c2 1 3 3 4 6l2 7c0 3-1 7-4 10l-8 6a19 19 0 01-21-4 18 18 0 013-28zm90 68c3-2 7-3 11-3l7 1 6 4c2 1 3 4 4 6l2 7c0 4-1 7-4 10s-5 6-8 7-7 2-11 1-7-2-9-5l-6-9a18 18 0 018-19zm203-222c0 8-8 14-17 14H277c-9 0-15-8-15-16v-20c0-8 8-14 17-14h444c8 0 14 8 14 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3dg66vs7nmd";
freezeTemplate(tmpl);
