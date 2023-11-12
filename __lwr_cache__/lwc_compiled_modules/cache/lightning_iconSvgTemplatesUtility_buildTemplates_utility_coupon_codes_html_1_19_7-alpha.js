import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./coupon_codes.css";

import _implicitScopedStylesheets from "./coupon_codes.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 196v-72a24 24 0 00-24-24H164v16h-16v-16H44a24 24 0 00-24 24v72a64 64 0 010 128v72a24 24 0 0024 24h104v-16h16v16h312a24 24 0 0024-24v-72a64 64 0 010-128zM164 372h-16v-32h16zm0-64h-16v-32h16zm0-64h-16v-32h16zm0-64h-16v-32h16zm104 109l-15 11-16-22-17 22-15-11 16-23-24-8 5-17 25 8v-29h20v28l23-8 6 18-25 7zm127 0l-15 11-16-22-17 22-15-11 16-23-25-8 6-17 24 8v-29h20v28l25-8 5 18-25 7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4ht5704hrvs";
freezeTemplate(tmpl);
