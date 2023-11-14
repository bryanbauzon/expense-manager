import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./copy_to_clipboard.css";

import _implicitScopedStylesheets from "./copy_to_clipboard.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M174 116h173c9 0 16-7 16-16V68c0-26-21-48-47-48H206a48 48 0 00-47 48v32c-1 9 6 16 15 16zm259-56h-16c-5 0-8 3-8 8v32c0 35-28 64-63 64H174a64 64 0 01-63-64V68c0-5-3-8-8-8H87a48 48 0 00-47 48v344c0 26 21 48 47 48h346c26 0 47-22 47-48V108c0-26-21-48-47-48z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-42gblkec5fn";
freezeTemplate(tmpl);
