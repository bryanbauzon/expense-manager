import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./logout.css";

import _implicitScopedStylesheets from "./logout.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M210 485v-30c0-8-7-15-15-15H95c-8 0-15-7-15-15V95c0-8 7-15 15-15h100c8 0 15-7 15-15V35c0-8-7-15-15-15H60a40 40 0 00-40 40v400a40 40 0 0040 40h135c8 0 15-7 15-15zm286-215c6-6 6-15 0-21L361 114c-6-6-15-6-21 0l-21 21c-6 6-6 15 0 21l56 56c6 6 2 17-7 17H155c-8 0-15 6-15 14v30c0 8 7 16 15 16h212c9 0 13 11 7 17l-56 56c-6 6-6 15 0 21l21 21c6 6 15 6 21 0l136-134z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3o6mttf1do5";
freezeTemplate(tmpl);
