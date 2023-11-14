import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./fulfillment_order.css";

import _implicitScopedStylesheets from "./fulfillment_order.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M243 365c7 0 14 1 20 3L155 62l-10-30a15 15 0 00-20-10L31 53c-9 3-13 12-10 20l10 30c3 9 12 13 20 10l49-16 99 281a84 84 0 0144-13zm169-73l-99 35a20 20 0 01-25-12l-35-99a20 20 0 0112-25l99-35a20 20 0 0125 12l35 99c4 10-2 21-12 25zm-94-163l-67 23a20 20 0 01-25-12l-23-67a20 20 0 0112-25l67-23a20 20 0 0125 12l23 67c4 9-1 21-12 25zm181 226l-10-30a15 15 0 00-20-10l-182 63a81 81 0 0136 55l167-57c8-3 12-12 9-21zm-256 36c-30 0-55 25-55 55s25 55 55 55 55-25 55-55c0-31-25-55-55-55z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-24lscs9smcd";
freezeTemplate(tmpl);
