import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_item_transaction.css";

import _implicitScopedStylesheets from "./product_item_transaction.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M790 229v80c0 22-18 40-40 40H230c-22 0-40-18-40-40v-80c0-22 18-40 40-40h520c22 0 40 18 40 40zm0 220v80c0 22-18 40-40 40H560c-22 0-40-18-40-40v-80c0-22 18-40 40-40h190c22 0 40 18 40 40zm0 220v80c0 22-18 40-40 40H560c-22 0-40-18-40-40v-80c0-22 18-40 40-40h190c22 0 40 18 40 40zm-439 35l1-1c5-6 5-15-1-20l-36-36c-2-2-3-4-3-7 0-6 4-10 10-10h122c8 0 15-7 16-15v-30c-1-8-8-15-16-15H323c-3 0-5-1-7-3-4-4-4-10 0-14l36-36 1-1c5-6 5-15-1-20l-21-21-1-1c-6-5-15-5-20 1L195 590l-1 1c-5 6-5 15 1 20l115 114c6 5 14 5 20 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-31svpvbf8vp";
freezeTemplate(tmpl);
