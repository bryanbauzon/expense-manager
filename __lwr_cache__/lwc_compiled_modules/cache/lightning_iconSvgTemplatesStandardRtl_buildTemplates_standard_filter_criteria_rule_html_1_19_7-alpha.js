import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./filter_criteria_rule.css";

import _implicitScopedStylesheets from "./filter_criteria_rule.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M518 200a20 20 0 0120 20v140a49 49 0 0052 53h140a20 20 0 0120 20v307a61 61 0 01-60 60H310a61 61 0 01-60-60V260a61 61 0 0160-60h208zm94 300H389a9 9 0 00-7 14l97 114a21 21 0 015 13v72a8 8 0 008 8h15a7 7 0 007-8v-72a18 18 0 016-13l98-114a9 9 0 00-6-14zm-9-300a17 17 0 0111 4l132 132a17 17 0 014 12 15 15 0 01-14 15H630a44 44 0 01-42-43V214a15 15 0 0115-14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4d5lhbtah5k";
freezeTemplate(tmpl);
