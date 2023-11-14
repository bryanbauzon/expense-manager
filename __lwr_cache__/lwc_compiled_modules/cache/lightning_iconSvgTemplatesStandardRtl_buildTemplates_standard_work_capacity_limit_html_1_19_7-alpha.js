import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_capacity_limit.css";

import _implicitScopedStylesheets from "./work_capacity_limit.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M759 293l-90-89c-3-3-6-4-9-4-8 0-14 6-14 14v64c1 21 18 38 39 38h64c7 0 13-6 13-13 0-4-1-7-3-10zM296 626V316c-32 0-58 26-58 58v367c0 32 26 58 58 59h292c32 0 57-25 58-57H413c-64 0-117 0-117-117zm219-183v90h85s5-32-24-62c-29-29-61-28-61-28z"${3}/><path d="M742 374h-98c-32 1-58-25-59-57v-98c1-10-7-18-17-19H412c-32-1-58 25-59 57v368c0 32 26 58 58 58h292c32 1 58-25 59-57V394c0-11-8-20-20-20zM635 530a118 118 0 01-236-2 118 118 0 01236 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-399t04l2vp8";
freezeTemplate(tmpl);
