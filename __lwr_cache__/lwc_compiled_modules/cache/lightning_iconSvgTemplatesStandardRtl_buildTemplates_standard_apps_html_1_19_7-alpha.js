import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./apps.css";

import _implicitScopedStylesheets from "./apps.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M32 20h-8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4v-8a4 4 0 00-4-4zm22 0h-8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4v-8a4 4 0 00-4-4zm22 0h-8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4v-8a4 4 0 00-4-4zM32 42h-8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4v-8a4 4 0 00-4-4zm22 0h-8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4v-8a4 4 0 00-4-4zm22 0h-8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4v-8a4 4 0 00-4-4zM32 64h-8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4v-8a4 4 0 00-4-4zm22 0h-8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4v-8a4 4 0 00-4-4zm22 0h-8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4v-8a4 4 0 00-4-4z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-2a07s24t6jc";
freezeTemplate(tmpl);
