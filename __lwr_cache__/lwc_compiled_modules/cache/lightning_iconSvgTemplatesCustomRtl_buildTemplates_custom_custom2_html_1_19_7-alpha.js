import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom2.css";

import _implicitScopedStylesheets from "./custom2.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M590 220c-30-20-138-39-180 30-20 33 4 91 22 128 5 9 15 14 25 10a122 122 0 0173-4c9 2 18-2 22-10 7-13 19-28 38-44 50-40 30-90 0-110zm-52 394a121 121 0 01-73 1c-9-3-19 2-23 10-7 13-19 29-39 45-50 40-30 91 0 111s139 39 180-30c19-32-3-90-21-127-5-9-15-13-24-10zm212-204c-33-20-91 4-128 22-9 5-14 15-10 25a122 122 0 014 73c-2 9 2 18 10 22 13 7 28 19 44 38 40 50 90 30 110 0s39-139-30-180zM386 538a121 121 0 01-1-73c3-9-2-19-10-23-13-7-29-19-45-39-40-50-91-30-111 0s-39 138 30 180c32 19 90-3 127-21 9-5 13-15 10-24z"${3}/><circle cx="500" cy="500" r="60"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-35urq6gn1ur";
freezeTemplate(tmpl);
