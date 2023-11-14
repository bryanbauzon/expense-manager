import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./asset_object.css";

import _implicitScopedStylesheets from "./asset_object.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M455 20H65c-12 0-22 10-23 23v390c0 12 10 22 23 22h50v22c0 13 10 23 23 23h25c13 0 23-10 23-23v-23h148v23c0 13 10 23 23 23h26c12 0 22-10 22-23v-23h50c12 0 22-10 23-23V44c0-13-10-23-23-23zM130 176c0-4 3-8 7-8h34c5 0 8 3 8 7v122c0 4-2 8-7 8h-33a8 8 0 01-8-7V177zm258 160c0 5-3 8-7 9H139a8 8 0 01-8-7v-10c0-4 3-7 7-8h243c4 0 8 3 8 7v10zm-194-39V177c0-5 3-9 8-9h18c4 0 7 3 8 7v122c0 4-3 8-7 8h-17a8 8 0 01-9-7v-1zm57 0V177c0-5 3-9 7-9h34c4 0 8 3 8 7v122c0 4-3 8-7 8h-33a8 8 0 01-8-7v-1zm63 0V177c0-5 4-9 9-9s8 4 8 8v121c0 4-4 8-8 8s-8-3-8-8zm40 0V177c0-5 3-9 7-9h19c4 0 8 3 8 7v122c0 4-3 8-7 8h-17a8 8 0 01-8-7v-1zm34-153c0 4-3 8-7 8H139a8 8 0 01-8-7v-9c0-4 3-8 7-8h243c4 0 8 3 8 7v9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7g94njjpr1s";
freezeTemplate(tmpl);
