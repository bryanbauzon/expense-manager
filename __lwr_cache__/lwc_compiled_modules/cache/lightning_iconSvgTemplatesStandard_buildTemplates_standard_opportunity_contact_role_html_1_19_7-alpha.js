import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./opportunity_contact_role.css";

import _implicitScopedStylesheets from "./opportunity_contact_role.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M649 474c-82 0-150 67-150 150a150 150 0 10150-150zm73 131l-28 28c-3 3-4 6-4 8l7 42c2 12-9 5-9 5l-34-18c-5-3-10 0-10 0l-35 18c-9 5-9 0-9-4l7-39c1-8-3-11-3-12l-25-24-3-3c-3-3-5-8 6-10l35-5c5-1 8-3 9-5l19-39c1-3 5-6 9 2l19 38c1 2 4 3 6 4h3l37 5h1c2 1 9 3 2 9z"${3}/><path d="M489 772c10 0 16-12 10-20a196 196 0 01-21-232c21-36 45-51 64-79 31-46 37-112 17-162-20-51-67-81-122-80s-100 35-117 86c-20 56-11 124 34 166 19 17 35 44 26 70-2 5-8 13-22 19-57 25-115 55-141 97-5 8-15 28-16 56a177 177 0 002 30c3 17 13 32 28 41 6 3 20 8 47 8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3ioqo00hc9g";
freezeTemplate(tmpl);
