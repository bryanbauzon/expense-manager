import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_report.css";

import _implicitScopedStylesheets from "./service_report.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M434 60h-16a8 8 0 00-8 7v33a64 64 0 01-63 64H173a64 64 0 01-64-64V68a8 8 0 00-7-8H85a48 48 0 00-47 48v344a48 48 0 0047 48h350a48 48 0 0047-48V108a48 48 0 00-48-48zM204 388c0 9-7 16-15 16h-17a16 16 0 01-16-16v-80c0-9 8-16 16-16h16c10 0 16 7 16 16v80zm80 0c0 9-7 16-16 16h-16a16 16 0 01-16-16V236c0-9 7-16 16-16h16c9 0 16 7 16 16v152zm80 0c0 9-8 16-17 16h-16a16 16 0 01-16-16V268c0-9 7-16 16-16h16c10 0 16 7 16 16v120zM173 116h174c9 0 16-7 16-16V68a48 48 0 00-47-48H204a48 48 0 00-47 48v32c0 9 7 16 16 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-h83hdv1squ";
freezeTemplate(tmpl);
