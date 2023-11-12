import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./web_link.css";

import _implicitScopedStylesheets from "./web_link.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M270 20a239 239 0 100 480 239 239 0 100-480zm30 343c-15 15-20 44-26 64-1 4-4 8-8 10l-10 5c-6 3-13 2-18-3-10-9-18-23-18-37 0-24-40-16-40-64 0-39-50-62-86-45l-9 3c-6 2-12-2-13-8l-2-28c0-48 17-92 45-126l2-1c24-28 55-50 91-62 9-3 17 7 12 15-4 6-6 12-6 17 1 21-19 34-28 31-8-3-30 11-10 21l11 5 2 1 3 2c36 21 29 38 14 64-17 28-24 0-48-8s-48 8-40 24 32 0 48 16 16 40 64 24 56-8 72 8c14 16 22 48-2 72zm127-2c-19-22 0-73-23-102-25-31-57 1-88-48-29-47 8-86 46-99 10-4 21-5 32-5 2 0 5 1 7 3a198 198 0 0143 249c-4 6-12 7-17 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-185dqqo33ku";
freezeTemplate(tmpl);
