import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./capacity_plan.css";

import _implicitScopedStylesheets from "./capacity_plan.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M433 60h-17a7 7 0 00-7 8v32a64 64 0 01-63 64H174a64 64 0 01-63-64V67a7 7 0 00-8-7H87a48 48 0 00-47 48v344a48 48 0 0047 48h346a48 48 0 0047-48V108a48 48 0 00-47-48zM259 450a120 120 0 012-240 120 120 0 01-2 240z"${3}/><path d="M170 116h178a16 16 0 0016-16V68a48 48 0 00-48-48H204a48 48 0 00-48 48v32a15 15 0 0013 16zm152 156a90 90 0 00-62-28v88h88a73 73 0 00-26-60z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5imfrtjq7m1";
freezeTemplate(tmpl);
