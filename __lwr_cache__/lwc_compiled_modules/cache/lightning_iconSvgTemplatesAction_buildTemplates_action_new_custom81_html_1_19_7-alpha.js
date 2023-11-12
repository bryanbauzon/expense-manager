import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom81.css";

import _implicitScopedStylesheets from "./new_custom81.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M475 20l-39 1c-123 6-265 37-272 39-10 3-16 13-16 22v262c-8-3-21-5-32-5-53 0-96 36-96 80s43 80 96 80 96-36 96-80V256c0-7 5-14 12-15 39-10 94-20 195-26 10-1 17 6 17 16v83c-8-3-21-5-32-5-53 0-96 36-96 80s43 80 96 80 96-36 96-80V44c0-14-11-25-25-24zm-54 127c-98 6-147 15-190 25-10 2-19-6-19-16v-25c0-7 5-14 13-16 42-10 92-20 194-26 10-1 17 6 17 16v25c0 10-6 17-15 17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1danp531277";
freezeTemplate(tmpl);
