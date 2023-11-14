import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sort_policy.css";

import _implicitScopedStylesheets from "./sort_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M128 20H80a60 60 0 00-60 60v32a60 60 0 0060 60h48a60 60 0 0060-60V80a60 60 0 00-60-60zm-16 104H96a28 28 0 010-56h16a28 28 0 010 56zm185 48h48a60 60 0 0060-60V80a60 60 0 00-60-60h-48a60 60 0 00-60 60v32a60 60 0 0060 60zm16-104h16a28 28 0 110 56h-16a28 28 0 010-56zM128 220H80a60 60 0 00-60 60v32a60 60 0 0060 60h48a60 60 0 0060-60v-32a60 60 0 00-60-60zm-16 104H96a28 28 0 010-56h16a28 28 0 010 56zm386 101l-11-10a8 8 0 00-12 0l-20 18a5 5 0 01-8 0 6 6 0 01-1-3v-90a9 9 0 00-9-8h-17a9 9 0 00-8 8v89a5 5 0 01-6 6 5 5 0 01-4-2l-20-20a8 8 0 00-11 0l-11 13a7 7 0 000 10l63 62a8 8 0 0011 0l64-61a8 8 0 000-10zM366 306l10-10a7 7 0 001-10v-2l-64-61a8 8 0 00-11 0l-63 61a7 7 0 000 10v1l12 11a8 8 0 0011 0l20-19a6 6 0 0110 4v89a9 9 0 008 8h17a9 9 0 008-8v-89a5 5 0 0110-4l20 20a8 8 0 0011 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4iaairq2ktr";
freezeTemplate(tmpl);
