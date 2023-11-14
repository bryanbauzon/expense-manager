import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_category_wallet_group.css";

import _implicitScopedStylesheets from "./crypto_category_wallet_group.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M532 209a64 64 0 00-64 0L264 326a64 64 0 00-33 56v236c0 23 13 44 33 55l204 118c20 12 44 12 64 0l204-118c20-11 32-32 32-55V382c0-23-12-44-32-55zm-57 98c15-9 34-9 50 0l28 16c16 9 26 26 26 44v32c0 18-10 35-26 44l-28 16c-15 9-35 9-50 0l-29-16c-15-9-25-26-25-44v-32c0-18 10-35 25-44zm-76 107h-30c-28 0-51 22-51 50v146c0 28 23 50 51 50h262c28 0 51-22 51-50v-68c0-23-16-44-39-49v-1H377a19 19 0 110-39h42a52 52 0 01-20-39zm180 39h62c-4-20-20-35-40-39-1 16-9 30-22 39z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-18sf8n7h7it";
freezeTemplate(tmpl);
