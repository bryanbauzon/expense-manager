import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./education.css";

import _implicitScopedStylesheets from "./education.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M258 267c-12 1-23-4-35-8L33 196c-4-2-7-3-10-6-4-3-4-7 0-10 3-2 7-5 11-6l203-61c15-5 31-5 47 0l201 60 12 6c5 3 5 8 0 11l-10 5-202 67c-9 4-17 5-27 5zm-133 3c-10-2-12 4-12 9v76c0 9 3 14 9 20l7 6c16 11 35 18 54 23a297 297 0 00188-13c10-5 20-10 27-18 5-5 7-10 6-17l1-74c0-14-10-12-14-11l-107 35c-18 6-35 6-52 0zm334-23c-3 1-4 2-4 6v68l-2 7-14 36a30 30 0 006 31l9 8c3 3 8 4 12 5 7 1 13-3 18-7l7-7c6-8 7-18 5-27-3-14-9-26-15-38-2-2-2-6-2-8v-74c0-5-4-4-6-3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6dnlegh1ucq";
freezeTemplate(tmpl);
