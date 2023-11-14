import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quick_text.css";

import _implicitScopedStylesheets from "./quick_text.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M495 215c-167 0-299 123-299 274 0 48 14 93 36 133 4 6 5 14 3 21l-39 107c-4 10 6 19 16 16l108-41c6-3 14-1 21 3 45 25 99 40 157 40 164-1 298-123 298-276-1-154-135-277-301-277zm140 381c0 7-6 12-12 12H367c-7 0-12-6-12-12v-23c0-7 6-12 12-12h256c7 0 12 6 12 12zm0-93c0 7-6 12-12 12H428c-7 0-12-6-12-12v-23c0-7 6-12 12-12h194c7 0 12 6 12 12h1zm0-93c0 7-6 12-12 12H367c-7 0-12-6-12-12v-23c0-7 6-12 12-12h256c7 0 12 6 12 12z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3spo9po3seu";
freezeTemplate(tmpl);
