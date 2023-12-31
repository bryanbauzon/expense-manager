import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./promotions.css";

import _implicitScopedStylesheets from "./promotions.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M592 533a39 39 0 1038 39 39 39 0 00-38-39zM408 390a39 39 0 1038 39 39 39 0 00-38-39zm374 71l-33-38a70 70 0 01-16-40l-4-50a63 63 0 00-58-59l-43-4a92 92 0 01-51-22l-33-28a64 64 0 00-83-1l-35 30a81 81 0 01-47 19l-47 4a63 63 0 00-59 58l-3 41a93 93 0 01-22 53l-28 32a64 64 0 00-1 83l31 37a78 78 0 0117 44l4 48a63 63 0 0058 59l43 3a90 90 0 0151 22l33 29a64 64 0 0083 0l38-31a73 73 0 0142-17l49-3a63 63 0 0059-58l3-40a102 102 0 0125-58l26-30a64 64 0 001-83zm-446-32a72 72 0 1172 71 72 72 0 01-72-71zm104 211a6 6 0 01-4 3h-21a6 6 0 01-5-3 5 5 0 010-5l150-275a6 6 0 014-3h23a6 6 0 012 8zm224-68a72 72 0 11-72-72 72 72 0 0172 72z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4e43g09urdo";
freezeTemplate(tmpl);
