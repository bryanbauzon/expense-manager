import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./price_books.css";

import _implicitScopedStylesheets from "./price_books.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M86 369v-79H70a32 32 0 01-32-32 33 33 0 0130-32h18v-79H70a32 32 0 01-32-32 33 33 0 0130-32h18V68a48 48 0 0146-46h300c26 0 49 16 50 42v382a54 54 0 01-48 52H134a53 53 0 01-49-48v-17H70a32 32 0 01-32-32 33 33 0 0130-32zm189-232a20 20 0 00-15 6L148 254a20 20 0 000 29l123 123a20 20 0 0029 0l112-112a20 20 0 006-15l-2-68a17 17 0 00-6-14l-53-54a23 23 0 00-14-6zm-39 108a5 5 0 017 0l65 65a5 5 0 010 7l-11 11a5 5 0 01-7 0l-65-65a5 5 0 010-7zm32-30a5 5 0 017 0l65 65a5 5 0 010 7l-10 10a5 5 0 01-7 0l-65-65a5 5 0 010-7zm105-33a20 20 0 11-29 0 20 20 0 0129 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-75hj4crg5ub";
freezeTemplate(tmpl);
