import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./outcome.css";

import _implicitScopedStylesheets from "./outcome.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M362 116l-1-1c-6-5-15-5-20 1l-22 21c-6 6-5 15 0 20l56 56c2 2 3 4 3 7 0 6-4 11-10 11H156c-8 0-15 6-15 14v30c1 8 7 15 15 16h213l5 2c5 4 5 10 2 15l-56 57c-6 6-5 15 0 20l21 22c6 6 15 5 20 0l135-135c6-6 5-15 0-20L362 116zm-151 56h30c8 0 15-7 15-15V61a40 40 0 00-40-40H61a40 40 0 00-40 40v400a40 40 0 0040 40h154a40 40 0 0040-40v-95c0-8-7-15-15-15h-30c-8 0-15 7-15 15v59c0 8-7 15-15 15H96c-8 0-15-7-15-15V95c0-8 7-15 15-15h84c8 0 15 7 15 15v61c1 9 7 16 16 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-qd64f84tvp";
freezeTemplate(tmpl);
