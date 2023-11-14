import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_plan_rule.css";

import _implicitScopedStylesheets from "./work_plan_rule.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M393 321h214a20 20 0 0020-20v-40a60 60 0 00-58-60H433a59 59 0 00-58 60v40a17 17 0 0018 20zm321-69h-20a9 9 0 00-10 10v40a79 79 0 01-78 79H393a79 79 0 01-78-79v-40a9 9 0 00-10-10h-20a59 59 0 00-58 60v426a60 60 0 0058 60h429a59 59 0 0058-60V312a58 58 0 00-58-60zm-27 478a15 15 0 01-12 12H563c-7 0-10-8-3-13l36-38-70-70H324a11 11 0 01-10-10v-45a11 11 0 0110-10h202l69-70-36-36c-5-6-3-14 4-14h111a15 15 0 0112 12v111c0 7-8 10-13 3l-36-35-62 62 62 61 36-36c6-5 14-3 14 4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ehijc1n5fa";
freezeTemplate(tmpl);
