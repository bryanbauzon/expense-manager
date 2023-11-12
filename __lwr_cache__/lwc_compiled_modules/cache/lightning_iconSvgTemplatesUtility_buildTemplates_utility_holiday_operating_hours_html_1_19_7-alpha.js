import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./holiday_operating_hours.css";

import _implicitScopedStylesheets from "./holiday_operating_hours.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M387 256a113 113 0 01113 110v3a113 113 0 01-110 113h-3a113 113 0 01-3-225.9zm-4 31v1l-17 53a4 4 0 01-4 3h-54a6 6 0 00-4 10l1 1 43 31a6 6 0 012 6v1l-20 54a5 5 0 007 6h1l46-34a5 5 0 016-1l1 1 46 34a5 5 0 008-5v-1l-20-54a6 6 0 011-5l1-1 43-33a6 6 0 00-2-10h-55a5 5 0 01-4-2v-1l-17-53a5 5 0 00-9-1zM218 30a199 199 0 01199 198v3a143 143 0 00-25-3h-9v-3a164.7 164.7 0 10-164.7 167.9 163 163 0 0030-2 142 142 0 009 32 194 194 0 01-39 4 198 198 0 010-397zm2 113a11 11 0 0110 10v67a11 11 0 003 8l38 39a10 10 0 010 14l-14 15a10 10 0 01-15 0l-50-51a14 14 0 01-3-8v-84a11 11 0 0110-10h21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-11449ne60gf";
freezeTemplate(tmpl);
