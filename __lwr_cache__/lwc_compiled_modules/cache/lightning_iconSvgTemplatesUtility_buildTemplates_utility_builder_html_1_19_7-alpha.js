import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./builder.css";

import _implicitScopedStylesheets from "./builder.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M115 170H35c-8 0-15 7-15 15v255a40 40 0 0040 40h55c8 0 15-7 15-15V185c0-8-7-15-15-15zm370 0H185c-8 0-15 7-15 15v280c0 8 7 15 15 15h275a40 40 0 0040-40V185c0-8-7-15-15-15zM460 40H60a40 40 0 00-40 40v35c0 8 7 15 15 15h450c8 0 15-7 15-15V80a40 40 0 00-40-40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-8nqg7uieif";
freezeTemplate(tmpl);
