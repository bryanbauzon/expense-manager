import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./medication_reconciliation.css";

import _implicitScopedStylesheets from "./medication_reconciliation.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M642 498L476 695H291a47 47 0 01-47-47V248a47 47 0 0147-48h304a47 47 0 0148 47zM415 367a9 9 0 009 10h121a9 9 0 009-10v-18a10 10 0 00-10-10l-120 1a10 10 0 00-10 9zm130 135a9 9 0 008-9v-19a10 10 0 00-10-10H423a10 10 0 00-9 10v18a10 10 0 009 10zm-189-18l27-27a7 7 0 000-10l-10-9a7 7 0 00-9 0l-27 27-26-26a7 7 0 00-10 0l-10 9a7 7 0 000 10l26 26-25 26a7 7 0 000 10l10 10a7 7 0 0010 0l25-26 27 26a7 7 0 0010 0l10-10a7 7 0 000-9zm48-174l-10-9a5 5 0 00-1-2 6 6 0 00-9 2l-60 60-24-24a4 4 0 00-1-1 6 6 0 00-8 1l-10 10a4 4 0 00-1 1 6 6 0 001 8l34 34a12 12 0 009 4 13 13 0 0010-4l71-71c1-1 1-5-1-9zm119 382a64 64 0 0096 87l3-4 48-57-98-83zm210-148a65 65 0 00-91 7l-48 59 98 83 49-57a65 65 0 00-8-92z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-57or778569a";
freezeTemplate(tmpl);
