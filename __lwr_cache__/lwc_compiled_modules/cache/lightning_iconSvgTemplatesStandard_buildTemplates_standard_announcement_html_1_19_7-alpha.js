import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./announcement.css";

import _implicitScopedStylesheets from "./announcement.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M460 743l-16-13c-18-12-18-37-18-50v-36c0-10-9-19-19-19h-75c-10 0-19 9-19 19v96c0 34 20 60 51 60h62c36 0 39-25 39-25s6-22-5-32zm280-342V230c0-30-38-39-58-19L570 316a96 96 0 01-63 21H317c-66 1-117 57-117 122v2c0 65 51 114 117 114h191c24 0 46 10 64 25l110 107c20 20 58 12 58-17V520c38 0 60-26 60-60 0-33-23-59-60-59z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-208rdntfboi";
freezeTemplate(tmpl);
