import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./desktop.css";

import _implicitScopedStylesheets from "./desktop.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 60a40 40 0 00-40-40H60a40 40 0 00-40 40v260a40 40 0 0040 40h400a40 40 0 0040-40V60zm-60 225c0 8-7 15-15 15H95c-8 0-15-7-15-15V95c0-8 7-15 15-15h330c8 0 15 7 15 15v190zM330 440h-30c-6 0-10-4-10-10v-20c0-6-4-10-10-10h-40c-6 0-10 4-10 10v20c0 6-4 10-10 10h-30a40 40 0 00-40 40v5c0 8 7 15 15 15h190c8 0 15-7 15-15v-5a40 40 0 00-40-40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1ef3363d7l";
freezeTemplate(tmpl);
