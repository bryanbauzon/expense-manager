import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./share.css";

import _implicitScopedStylesheets from "./share.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20 315v145a40 40 0 0040 40h400a40 40 0 0040-40V180a40 40 0 00-40-40h-75c-8 0-15 7-15 15v30c0 8 7 15 15 15h40c8 0 15 7 15 15v210c0 8-7 15-15 15H95c-8 0-15-7-15-15V315c0-8-7-15-15-15H35c-8 0-15 7-15 15zm134-176c-9 0-13-11-7-17l56-56c6-6 5-15-1-21l-22-21c-6-6-15-6-21 0L24 159c-6 6-6 15 0 21l136 135c6 6 15 6 21 0l21-21c6-6 6-15 0-21l-55-56c-6-6-2-17 7-17h16c78 0 142 62 149 137 1 7 7 13 15 13h30c9 0 16-8 15-16-8-105-99-194-199-194l-26-1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-12n46b1ubhk";
freezeTemplate(tmpl);
