import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./segments.css";

import _implicitScopedStylesheets from "./segments.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M788 451l-10-28-227 81-5 13a48 48 0 01-17 23 49 49 0 01-78-40 57 57 0 0114-37l6-8V203l-36 8a290 290 0 00-161 99 297 297 0 00-69 189 296 296 0 00592 0 177 177 0 00-9-48zM667 668a234 234 0 01-167 69 236 236 0 01-181-387 241 241 0 0193-68v155a115 115 0 00-20 64 107 107 0 0032 77 110 110 0 0077 32 107 107 0 0064-21 102 102 0 0032-37l140-50a238 238 0 01-70 166zM556 439l195-69a11 11 0 005-17l-2-4a297 297 0 00-207-140 16 16 0 00-18 16v196a20 20 0 001 7 20 20 0 0026 11z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-6tjkae12pji";
freezeTemplate(tmpl);
