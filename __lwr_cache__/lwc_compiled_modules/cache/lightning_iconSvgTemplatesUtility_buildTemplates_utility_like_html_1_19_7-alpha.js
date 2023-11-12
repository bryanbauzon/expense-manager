import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./like.css";

import _implicitScopedStylesheets from "./like.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M105 210H55c-8 0-15 7-15 15v230c0 8 7 15 15 15h25a40 40 0 0040-40V225c0-8-7-15-15-15zm335 10h-60a40 40 0 01-40-40V80a40 40 0 00-40-40h-25c-8 0-15 7-15 15v60c0 53-37 105-85 105-8 0-15 7-15 15v200c0 8 6 15 14 15 68 3 91 30 162 30 75 0 144-8 144-95V260a40 40 0 00-40-40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2m20gd9i6ke";
freezeTemplate(tmpl);
