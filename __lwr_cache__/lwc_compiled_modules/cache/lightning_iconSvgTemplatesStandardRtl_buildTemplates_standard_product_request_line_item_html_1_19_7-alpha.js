import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_request_line_item.css";

import _implicitScopedStylesheets from "./product_request_line_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M200 751v-47c0-12 11-22 23-22h370c12 0 22 11 22 23v47c0 12-11 22-23 22H222c-13 0-23-11-22-23zm528 23c-12-1-21-11-20-23v-47c0-12 11-22 23-22h47c12 0 22 11 22 23v47c0 12-11 22-23 22zm28-289c5 9 6 29-3 33l-17 16c-9 4-27 2-32-6-50-83-177-125-260-84l-17 8c-3 1-5 4-6 7-2 7 1 14 8 16l90 36c10 3 15 14 12 24l-11 35-1 3c-4 8-13 12-21 8l-220-86c-10-3-15-14-12-24l68-227 1-3c4-8 13-12 21-8l34 13c9 4 15 14 12 24l-28 94c-3 10 7 21 17 16l29-13c107-52 268 1 336 118z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2lm21emih58";
freezeTemplate(tmpl);
