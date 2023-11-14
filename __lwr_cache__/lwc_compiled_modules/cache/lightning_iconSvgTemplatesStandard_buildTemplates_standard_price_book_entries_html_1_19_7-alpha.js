import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./price_book_entries.css";

import _implicitScopedStylesheets from "./price_book_entries.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M488 200l148 3a55 55 0 0131 13l58 58 58 58a44 44 0 0113 31l4 149a45 45 0 01-13 32L544 787a45 45 0 01-63 0L347 653 213 519a45 45 0 010-63l243-243a45 45 0 0132-13zm-82 237l-24 23a10 10 0 000 16l142 142a10 10 0 0016 0l24-24a10 10 0 000-16L421 437a9 9 0 00-15 0zm67-68l-24 24a10 10 0 000 16l142 142a10 10 0 0016 0l24-24a10 10 0 000-16L489 369a12 12 0 00-16 0zm229-71a45 45 0 100 63 45 45 0 000-63z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3ddijc15lqa";
freezeTemplate(tmpl);
