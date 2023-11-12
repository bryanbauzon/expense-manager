import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./funding_requirement.css";

import _implicitScopedStylesheets from "./funding_requirement.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M208 270v152c0 4 3 6 6 6h3c30-17 92-62 92-65 0-18 5-31 8-39s10-18 13-23l13-16 15-13v-81c0-4-2-6-6-6h-3l-135 75a12 12 0 00-6 10zm-13-40l136-75c3-2 4-6 2-10l-2-1-122-69a40 40 0 00-40 0L48 144c-3 2-4 6-2 9l2 2 135 75h13zm-30 31L28 185c-3-2-6 0-8 3v137c0 14 8 26 20 33l120 69c3 2 7 0 9-3V272c0-5-2-9-6-10zm246 13a88.5 88.5 0 100 177 88.5 88.5 0 101-177zm50 67l-57 57a6 6 0 01-8 0l-30-32a6 6 0 010-8l7-8a6 6 0 019 0l16 17a4 4 0 005 0l42-43a6 6 0 018 0l8 8c2 2 2 6 0 8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-14bd2qfq4q7";
freezeTemplate(tmpl);
