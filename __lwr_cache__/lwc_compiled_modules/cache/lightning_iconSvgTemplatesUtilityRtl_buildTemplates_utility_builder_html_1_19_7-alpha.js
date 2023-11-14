import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./builder.css";

import _implicitScopedStylesheets from "./builder.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M390 185v280c0 8 7 15 15 15h55a40 40 0 0040-40V185c0-8-7-15-15-15h-80c-8 0-15 7-15 15zm-370 0v255a40 40 0 0040 40h275c8 0 15-7 15-15V185c0-8-7-15-15-15H35c-8 0-15 7-15 15zm0-105v35c0 8 7 15 15 15h450c8 0 15-7 15-15V80a40 40 0 00-40-40H60a40 40 0 00-40 40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2uogsrh7bs6";
freezeTemplate(tmpl);
