import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./process.css";

import _implicitScopedStylesheets from "./process.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M162 232l85-106c6-8 18-8 24 0l85 107c3 4 7 7 12 7h96c8 0 16-7 16-15V80c0-22-19-40-41-40H80a40 40 0 00-40 40v145c0 8 7 15 15 15h95c5 0 9-4 12-8zm195 56l-85 106c-6 8-18 8-24 0l-85-107c-4-3-8-7-13-7H55c-8 0-15 7-15 15v145a40 40 0 0040 40h360a40 40 0 0040-40V295c0-8-7-15-15-15h-96c-5 0-9 4-12 8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-64b7rk9ianp";
freezeTemplate(tmpl);
