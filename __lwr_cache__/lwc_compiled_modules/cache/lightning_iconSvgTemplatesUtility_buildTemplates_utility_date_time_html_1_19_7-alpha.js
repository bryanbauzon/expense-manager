import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./date_time.css";

import _implicitScopedStylesheets from "./date_time.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M436 68h-40V52c0-18-14-32-32-32s-32 14-32 32v16H188V52c0-18-14-32-32-32s-32 14-32 32v16H84c-26 0-48 22-48 48v16c0 9 7 16 16 16h416c9 0 16-7 16-16v-16c0-26-22-48-48-48zm32 128H52c-9 0-16 7-16 16v240c0 26 22 48 48 48h352c26 0 48-22 48-48V212c0-9-7-16-16-16zM260 467a119 119 0 010-238c65 0 119 54 119 119a119 119 0 01-119 119zm12-124v-51c0-4-4-8-8-8h-8c-4 0-8 4-8 8v56c0 3 1 6 4 8l38 38c3 3 8 3 11 0l6-6c3-3 3-8 0-11z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3f003fl7gr6";
freezeTemplate(tmpl);
