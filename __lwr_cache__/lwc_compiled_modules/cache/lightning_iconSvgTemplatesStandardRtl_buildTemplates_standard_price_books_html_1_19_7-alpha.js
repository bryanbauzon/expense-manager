import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./price_books.css";

import _implicitScopedStylesheets from "./price_books.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M774 729c0 32-28 63-59 64H345c-32 0-58-30-60-59v-20h-20a39 39 0 01-2-78h22v-98h-20a39 39 0 01-2-78h22v-98h-20a39 39 0 01-2-78h22v-22a60 60 0 0157-57l370 1c32 0 60 21 62 52zM518 347a25 25 0 00-18 8L362 492a25 25 0 000 36l152 152a25 25 0 0036 0l138-138a25 25 0 008-18l-3-84a21 21 0 00-8-17l-65-67a34 34 0 00-17-8zm-47 134a6 6 0 019 0l80 80a6 6 0 010 9l-13 13a6 6 0 01-9 0l-80-80a6 6 0 010-9zm39-38a6 6 0 019 0l80 80a6 6 0 010 9l-13 13a6 6 0 01-9 0l-80-80a6 6 0 010-9zm129-40a26 26 0 11-36 0 25 25 0 0136 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-54acilr71jj";
freezeTemplate(tmpl);
