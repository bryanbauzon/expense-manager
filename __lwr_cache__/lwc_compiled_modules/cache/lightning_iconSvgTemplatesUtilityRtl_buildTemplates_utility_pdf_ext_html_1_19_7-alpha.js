import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pdf_ext.css";

import _implicitScopedStylesheets from "./pdf_ext.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M286 114h51a11 11 0 0011-11 13 13 0 00-3-8l-72-71a9 9 0 00-7-3 11 11 0 00-11 11v51a31 31 0 0031 31zm212 211a14 14 0 00-14-15H364a14 14 0 00-14 14v15a14 14 0 0014 14h61L315 463a14 14 0 000 20l10 10a15 15 0 0011 5 13 13 0 0010-4l110-110v60a14 14 0 0014 14h15a14 14 0 0015-14zM184 207h-15v49h15a16 16 0 0015-11 39 39 0 002-14 36 36 0 00-3-18 15 15 0 00-14-6zm-71 2a13 13 0 00-8-2H90v22h15a12 12 0 008-3 11 11 0 003-8 10 10 0 00-3-9zm219-49h-78a47 47 0 01-47-46V36a14 14 0 00-13-15H68a47 47 0 00-47 46v294a46 46 0 0046 46h179v-1a159 159 0 01102-149v-81a16 16 0 00-16-16zm-207 77a29 29 0 01-19 5H90v27H75v-75h32a26 26 0 0118 6 23 23 0 017 18 24 24 0 01-7 19zm86 19a27 27 0 01-25 14h-32v-76h32a39 39 0 0112 1 25 25 0 0113 10 34 34 0 015 12 56 56 0 011 13 50 50 0 01-6 25zm80-49h-38v17h33v14h-33v31h-16v-75h54z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7drvgt0c74c";
freezeTemplate(tmpl);
