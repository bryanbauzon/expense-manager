import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sobject.css";

import _implicitScopedStylesheets from "./sobject.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M63 43h40a314 314 0 000 292H63C7 213 8 165 63 43zm174 181l9 39c3 9 8 16 14 21a87 87 0 0190-11l3-9c0-10-8-18-18-18l-8 2s-19 11-26 2a130 130 0 01-12-35l-9-43 19-28s22 8 33 8 33-9 33-38-21-31-28-31c-13 0-26 9-37 29l-24 42-6-30c-2-12-16-39-45-39s-56 17-56 17c-5 3-8 9-8 15 0 10 8 18 18 18l8-2s22-12 27 0l4 12c6 19 11 41 15 62l-19 27s-22-8-33-8-33 9-33 38 21 31 28 31c13 0 26-9 37-29zm198 64l2 1h9c10 0 20 2 29 5 36-94 30-144-19-251h-40c41 90 47 161 19 245zm-82 36c8-8 19-13 32-13 16 0 31 9 39 22a54 54 0 0176 49c0 30-24 54-54 54l-11-1a40 40 0 01-34 20c-6 0-12-2-17-4a45 45 0 01-41 27c-20 0-36-12-42-29l-9 1a41 41 0 01-42-41 40 40 0 0121-36 40 40 0 01-4-19c0-26 22-48 48-48 15-1 29 7 38 18z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-22ep7ftgq7q";
freezeTemplate(tmpl);
