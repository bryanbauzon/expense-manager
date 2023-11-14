import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_plan_rule.css";

import _implicitScopedStylesheets from "./work_plan_rule.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M624 301v-40a59 59 0 00-58-60H430a60 60 0 00-58 60v40a20 20 0 0020 20h214a17 17 0 0018-20zm-397 11v426a59 59 0 0058 60h429a60 60 0 0058-60V312a59 59 0 00-58-60h-20a9 9 0 00-10 10v40a79 79 0 01-78 79H393a79 79 0 01-78-79v-40a9 9 0 00-10-10h-20a58 58 0 00-58 60zm85 306c0-7 8-9 14-4l36 36 62-61-62-62-36 35c-5 7-13 4-13-3V448a15 15 0 0112-12h111c7 0 9 8 4 14l-36 36 69 70h202a11 11 0 0110 10v45a11 11 0 01-10 10H473l-70 70 36 38c7 5 4 13-3 13H324a15 15 0 01-12-12z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-44q491imuqi";
freezeTemplate(tmpl);
