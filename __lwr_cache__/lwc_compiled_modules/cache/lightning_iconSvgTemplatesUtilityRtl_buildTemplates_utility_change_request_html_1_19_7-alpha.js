import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./change_request.css";

import _implicitScopedStylesheets from "./change_request.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M164 100h32a8 8 0 008-7V68h112v24a8 8 0 007 8h33a8 8 0 008-7V68a49 49 0 00-48-48H204a49 49 0 00-48 48v24a8 8 0 008 8zm288 48H68a49 49 0 00-48 48v256a49 49 0 0048 48h384a49 49 0 0048-48V196a49 49 0 00-48-48zM234 329l-61 63a10 10 0 01-11 0l-62-63c-5-4-1-11 7-11h38a120 120 0 01118-122h4v46a82 82 0 00-77 76h36c8 0 12 7 8 11zm194 0h-38a122 122 0 01-121 122h-3v-46c46 0 78-30 78-76h-37c-8 0-11-6-7-11l62-63a10 10 0 0111 0l62 63c4 4 0 11-7 11z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ojq5dgplkt";
freezeTemplate(tmpl);
