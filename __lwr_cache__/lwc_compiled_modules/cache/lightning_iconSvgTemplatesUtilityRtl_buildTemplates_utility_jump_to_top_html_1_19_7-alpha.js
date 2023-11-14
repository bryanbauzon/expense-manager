import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./jump_to_top.css";

import _implicitScopedStylesheets from "./jump_to_top.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M114 216L249 79c6-6 16-6 22 0l135 137c6 6 6 16 0 22l-22 22c-6 6-16 6-22 0l-91-94c-6-6-16-6-22 0l-91 93c-6 6-16 6-22 0l-22-22c-5-6-5-15 0-21zm0 181l135-137c6-6 16-6 22 0l135 137c6 6 6 16 0 22l-22 22c-6 6-16 6-22 0l-91-94c-6-6-16-6-22 0l-91 93c-6 6-16 6-22 0l-22-22c-5-6-5-16 0-21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2o9voc7tjv8";
freezeTemplate(tmpl);
