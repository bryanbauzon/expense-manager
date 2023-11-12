import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lead_convert.css";

import _implicitScopedStylesheets from "./lead_convert.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M196 227c-5-6-2-15 5-17h86c64 0 116 55 110 121-6 57-56 99-113 99h-32c-8 0-15 7-15 15v30c0 8 7 15 15 15h35c93 0 168-75 170-167 2-95-79-173-174-174h-80s-26 1-10-17l57-56c6-6 6-15 0-21l-21-21c-6-6-15-6-21 0L74 169c-6 6-6 15 0 21l135 135c6 6 15 6 21 0l21-21c6-6 6-15 0-21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7s0uk8vfj2g";
freezeTemplate(tmpl);
