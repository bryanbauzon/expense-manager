import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sales_path.css";

import _implicitScopedStylesheets from "./sales_path.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M152 682l142-172c4-7 4-15 0-21L152 319l-2-6c0-6 5-10 10-10h207c6 0 11 2 14 7l149 180c4 6 4 14 0 21L382 691c-3 4-9 7-14 7H161c-6 0-10-4-10-10-1-2 0-5 1-6zm316 0l141-172c4-7 4-15 0-21L467 319l-2-6c0-6 5-10 10-10h207c6 0 11 2 14 7l149 180c4 6 4 14 0 21L697 691c-3 4-9 7-14 7H476c-6 0-10-4-10-10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6400un3ohh0";
freezeTemplate(tmpl);
