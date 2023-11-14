import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./price_adjustment_matrix.css";

import _implicitScopedStylesheets from "./price_adjustment_matrix.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M219 200h562c5 0 10 2 13 6s6 8 6 13v62a19 19 0 01-19 19H219c-5 0-10-2-13-6s-6-8-6-13v-62c0-5 2-10 6-13s8-6 13-6zm0 150l182 1c5 0 10 2 13 6 4 3 6 8 6 13v37c0 5-2 10-6 14s-8 5-13 5l-182-1c-5 0-10-2-13-6-4-3-6-8-6-13v-37c0-5 2-10 6-13s8-6 13-6zm286 0h276c5 0 10 2 13 6s6 8 6 13v37a19 19 0 01-19 19H505c-5 0-9-2-13-6s-5-8-5-13v-37c0-5 2-10 5-13s8-6 13-6zM219 475h180c5 0 10 2 13 6 4 3 6 8 6 13v37c0 5-2 10-6 13-3 4-8 6-13 6H219c-5 0-10-2-13-6-4-3-6-8-6-13v-37c0-5 2-10 6-13s8-6 13-6zm0 125h180c5 0 10 2 13 6 4 3 6 8 6 13v37c0 5-2 10-6 13-3 4-8 6-13 6H219c-5 0-10-2-13-6s-6-8-6-13v-37c0-5 2-10 6-13s8-6 13-6zm0 125h180c5 0 10 2 13 6 4 3 6 8 6 13v37c0 5-2 10-6 13-3 4-8 6-13 6H219c-5 0-10-2-13-6s-6-8-6-13v-37c0-5 2-10 6-13s8-6 13-6zm364-151c-4 0-8 1-11 3-4 3-7 6-8 10l-2 12c1 4 3 8 6 11s7 5 11 6 9 0 13-1a21 21 0 0013-20l-2-8-4-7-7-5-8-2h-1zm103 79c-5 0-9 1-12 4a21 21 0 00-9 22c1 4 3 8 6 11s7 5 11 6 8 0 12-2l10-7c3-3 3-8 3-12 1-3 0-6-1-9l-5-7-7-4zm88-61l18 21c5 7 8 15 8 23s-3 17-9 23l-14 17c-8 9-13 20-14 32l-2 22c-1 9-4 17-10 23s-14 9-23 10l-27 2c-9 0-17 4-23 9l-21 18a36 36 0 01-46-1l-19-15c-8-8-18-12-28-13l-25-2c-8-1-16-4-22-10s-9-14-10-23l-2-26c0-9-4-18-9-25l-17-20a36 36 0 010-46l15-19c8-8 12-18 13-29l2-23c0-8 4-16 10-22s14-10 23-10l25-2c10-1 19-5 26-11l20-16a36 36 0 0146 0l18 16c9 7 19 11 29 12l24 2c9 1 17 4 23 10s9 14 10 23l2 28c0 8 3 16 9 22zm-224-19c-4 6-7 14-6 22a40 40 0 1079-8c-2-8-6-15-11-21a39 39 0 00-44-8c-7 3-13 8-18 15zm50 141l1-1 83-154 1-2-2-2h-12l-2 1-1 1-84 153v3l2 1zm119-17c5-7 7-14 7-22a40 40 0 10-7 22z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1rdgse2fqgt";
freezeTemplate(tmpl);
