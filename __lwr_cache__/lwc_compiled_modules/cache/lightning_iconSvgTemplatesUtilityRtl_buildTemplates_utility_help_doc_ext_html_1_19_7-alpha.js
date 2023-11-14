import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./help_doc_ext.css";

import _implicitScopedStylesheets from "./help_doc_ext.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M498 325a14 14 0 00-14-15H364a14 14 0 00-14 14v16a14 14 0 0014 14h61L315 464a14 14 0 000 20l10 10a15 15 0 0011 5 13 13 0 0010-4l110-110v60a14 14 0 0014 14h15a14 14 0 0015-14zm-298-5h-40a11 11 0 01-12-11v-13a82 82 0 0155-77 62 62 0 0026-17 66 66 0 00-94-92 58 58 0 00-19 36 12 12 0 01-12 10H62a12 12 0 01-12-12v-1a133 133 0 0139-81 134 134 0 0195-37 131 131 0 0140 254 18 18 0 00-12 16v12a13 13 0 01-13 13zm13 85a12 12 0 01-13 15h-40a13 13 0 01-13-13v-40a13 13 0 0112-13h41a13 13 0 0112 13z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4ga5tk2rjn8";
freezeTemplate(tmpl);
