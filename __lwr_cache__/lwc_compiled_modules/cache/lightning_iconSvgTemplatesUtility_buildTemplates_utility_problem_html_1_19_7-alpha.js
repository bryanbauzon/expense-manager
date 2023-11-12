import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./problem.css";

import _implicitScopedStylesheets from "./problem.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M164 100h32a8 8 0 008-8V68h112v24a8 8 0 008 8h32a8 8 0 008-8V68a48 48 0 00-48-48H204a48 48 0 00-48 48v24a8 8 0 008 8zm288 48H68a48 48 0 00-48 48v256a48 48 0 0048 48h384a48 48 0 0048-48V196a48 48 0 00-48-48zM274 454a8 8 0 01-7 8h-27a8 8 0 01-8-8v-28a8 8 0 018-8h27a8 8 0 018 8zm8-86a12 12 0 00-8 10v10a8 8 0 01-8 8h-27a7 7 0 01-7-8v-9a55 55 0 0136-52 40 40 0 0017-12 45 45 0 00-30-74 42 42 0 00-32 12 40 40 0 00-12 25 8 8 0 01-8 6h-26a8 8 0 01-8-10 92 92 0 0125-54 84 84 0 0162-25 87 87 0 0182 86 90 90 0 01-56 87z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4p6a3j25uq8";
freezeTemplate(tmpl);
