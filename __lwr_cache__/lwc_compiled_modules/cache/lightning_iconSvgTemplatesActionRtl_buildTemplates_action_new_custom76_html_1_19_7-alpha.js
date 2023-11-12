import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom76.css";

import _implicitScopedStylesheets from "./new_custom76.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M259 304c-2-6-9-11-16-10h-7c-90 0-163-72-163-161v-4c0-8-11-11-15-5a113 113 0 0086 173l6 15 4 5 24 10c4 2 6 6 4 10l-8 23c-2 4 1 8 4 10l13 6c4 2 6 6 4 10l-7 25c-1 4 1 8 4 10l19 8c4 2 6 6 4 10l-7 25c-1 4 1 8 5 10l55 25c4 2 9 0 11-4l24-54c2-4 2-8 1-12zm216-8L345 162c6-20 6-42-2-65-15-43-55-74-102-77-70-3-127 56-120 126a113 113 0 00150 93l11 12c2 2 3 2 6 2h28c5 0 8 3 8 8l2 25c0 4 4 7 8 7h16c5 0 8 3 8 8l4 26c1 4 4 6 8 6h20c5 0 8 3 8 8l4 26c1 4 4 6 8 6h61c5 0 8-3 8-8v-59c1-4-1-8-4-10zM219 156c-23 0-41-18-41-40s18-40 41-40 41 18 41 40-18 40-41 40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-nro86pq7gb";
freezeTemplate(tmpl);
