import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tablet_portrait.css";

import _implicitScopedStylesheets from "./tablet_portrait.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M460 60a40 40 0 00-40-40H100a40 40 0 00-40 40v400a40 40 0 0040 40h320a40 40 0 0040-40V60zM259 480c-17 0-30-13-30-30s13-30 30-30 30 13 30 30-14 30-30 30zm141-95c0 8-7 15-15 15H135c-8 0-15-7-15-15V95c0-8 7-15 15-15h250c8 0 15 7 15 15v290z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2nsgrkcnmsc";
freezeTemplate(tmpl);
