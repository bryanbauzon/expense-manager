import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./block_visitor.css";

import _implicitScopedStylesheets from "./block_visitor.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M220 370a172 172 0 0123-82c17-30 36-42 51-64a146 146 0 0014-130 100 100 0 00-98-64 100 100 0 00-94 69c-16 45-9 99 27 133 15 14 29 36 21 57s-31 29-48 37c-39 17-86 41-94 87a62 62 0 0059 77h170a10 10 0 008-16 160 160 0 01-39-104zm245-85a120 120 0 100 170 120 120 0 000-170zm-142 28a80 80 0 0198-12L311 411a80 80 0 0112-98zm114 114a84 84 0 01-98 13l110-110a80 80 0 01-12 97z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-25u0rdt9fm6";
freezeTemplate(tmpl);
