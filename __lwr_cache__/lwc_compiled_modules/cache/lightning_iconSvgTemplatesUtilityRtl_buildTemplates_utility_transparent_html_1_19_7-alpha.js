import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./transparent.css";

import _implicitScopedStylesheets from "./transparent.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M485 56l-21-21a17 17 0 00-24 3L326 152l-22-40a365 365 0 01-32-82c-1-6-4-10-10-10s-8 5-10 10l-1 8a483 483 0 01-41 100 975 975 0 01-69 112 160 160 0 00-30 111v4l-72 75a19 19 0 00-3 24l21 21a17 17 0 0024-3L482 80a17 17 0 003-24zM384 238L164 460a145 145 0 0098 39 155 155 0 0070-14c50-25 81-64 90-120a152 152 0 00-32-120 120 120 0 00-6-8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-j5vjpkl3su";
freezeTemplate(tmpl);
