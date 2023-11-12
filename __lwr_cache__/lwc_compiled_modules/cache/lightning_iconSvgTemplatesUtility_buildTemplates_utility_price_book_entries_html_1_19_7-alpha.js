import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./price_book_entries.css";

import _implicitScopedStylesheets from "./price_book_entries.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M250 23l117 2a55 55 0 0125 10l46 46 46 46a35 35 0 0110 25l3 118a35 35 0 01-10 25L295 487a37 37 0 01-50 0L139 381 33 275a37 37 0 010-50L225 33a35 35 0 0125-10zm-64 187l-19 18a8 8 0 000 13l112 112a8 8 0 0013 0l19-19a8 8 0 000-13L197 210a7 7 0 00-11 0zm53-54l-19 19a8 8 0 000 13l112 112a8 8 0 0013 0l19-19a8 8 0 000-13L251 156a10 10 0 00-12 0zm181-56a37 37 0 00-50 0 37 37 0 000 50 37 37 0 0050 0 37 37 0 000-50z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ui8ads68o1";
freezeTemplate(tmpl);
