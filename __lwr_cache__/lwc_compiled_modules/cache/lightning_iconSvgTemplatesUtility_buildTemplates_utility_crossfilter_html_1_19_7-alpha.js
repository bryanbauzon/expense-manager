import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crossfilter.css";

import _implicitScopedStylesheets from "./crossfilter.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M350 90a150 150 0 00-48 7c18 15 34 33 47 53h1a110 110 0 11-43 211c8-11 15-23 20-35l5-14a170 170 0 10-114 111 238 238 0 01-47-53h-1a110 110 0 1144-211 170 170 0 10136-69z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-61kr6bqmosg";
freezeTemplate(tmpl);
