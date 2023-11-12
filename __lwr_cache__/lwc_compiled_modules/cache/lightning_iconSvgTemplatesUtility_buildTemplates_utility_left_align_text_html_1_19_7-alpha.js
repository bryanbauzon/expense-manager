import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./left_align_text.css";

import _implicitScopedStylesheets from "./left_align_text.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M480 65c0-8-7-15-15-15H55c-8 0-15 7-15 15v30c0 8 7 15 15 15h410c8 0 15-7 15-15zm-80 120c0-8-7-15-15-15H55c-8 0-15 7-15 15v30c0 8 7 15 15 15h330c8 0 15-7 15-15zm0 240c0-8-7-15-15-15H55c-8 0-15 7-15 15v30c0 8 7 15 15 15h330c8 0 15-7 15-15zm80-120c0-8-7-15-15-15H55c-8 0-15 7-15 15v30c0 8 7 15 15 15h410c8 0 15-7 15-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-593hj3aj0ul";
freezeTemplate(tmpl);
