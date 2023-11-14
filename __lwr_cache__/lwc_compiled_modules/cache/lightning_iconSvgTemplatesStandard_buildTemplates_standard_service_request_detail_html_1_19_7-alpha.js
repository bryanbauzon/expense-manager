import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_request_detail.css";

import _implicitScopedStylesheets from "./service_request_detail.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M695 796a102 102 0 11102-102 102 102 0 01-102 102zm9-126a10 10 0 00-7 2l-17 12a31 31 0 00-5 5 3 3 0 003 5l4-2 4-1c1 0 3 0 3 2a22 22 0 010 2l-12 48a9 9 0 004 11 11 11 0 0012-1l16-11a56 56 0 007-7 2 2 0 000-3 3 3 0 00-3-1 24 24 0 00-4 1l-4 2c-2 1-3 0-3-2a26 26 0 011-4l11-45a10 10 0 00-10-13zm11-21a15 15 0 00-18-15 14 14 0 00-11 20 15 15 0 0017 9 15 15 0 0012-14zm-331-83a87 87 0 004-24 92 92 0 00-94-104 132 132 0 00-25 3c-4 0-4 6-2 9l50 53a10 10 0 010 14l-36 34a8 8 0 01-13 0l-50-55c-4-2-8-2-8 2a93 93 0 00-5 25 97 97 0 00101 95 94 94 0 0025-3l114 121a40 40 0 0052 1 28 28 0 0011-25 35 35 0 00-10-25zm404-249a156 156 0 00-30-57 136 136 0 00-61-42 150 150 0 00-39-7 132 132 0 00-59 9 156 156 0 00-55 38l-18 20-1-2a192 192 0 00-31-33 148 148 0 00-43-24 133 133 0 00-57-8 146 146 0 00-55 15 140 140 0 00-65 68 186 186 0 00-17 70 170 170 0 003 38h2a159 159 0 0131-4h2a133 133 0 01133 146v10l99 106 1 1 21 22a147 147 0 01147-135 138 138 0 0117 1l22-27a366 366 0 0041-67 206 206 0 0019-65 191 191 0 00-7-73z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4bndl1ahtv1";
freezeTemplate(tmpl);
