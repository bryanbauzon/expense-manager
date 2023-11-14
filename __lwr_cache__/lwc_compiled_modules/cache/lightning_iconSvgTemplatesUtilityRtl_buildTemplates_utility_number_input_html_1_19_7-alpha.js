import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./number_input.css";

import _implicitScopedStylesheets from "./number_input.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M448 495H72a47 47 0 01-47-47V72c0-26 21-47 47-47h376c26 0 47 21 47 47v376c0 26-21 47-47 47zM88 103v313c0 9 7 16 16 16h313c9 0 16-7 16-16V103c0-9-7-16-16-16H104c-9 1-16 8-16 16zm274 100h-29l12-48v-1c0-2-1-4-4-4h-23c-2 0-3 1-4 3l-12 49h-58l12-48v-1c0-2-1-4-4-4h-23c-2 0-3 1-4 3l-13 49h-32c-2 0-3 1-4 3l-6 22v1c0 2 1 4 4 4h30l-14 56h-31c-2 0-3 1-4 3l-6 22v1c0 2 1 4 4 4h29l-12 48v1c0 2 1 4 4 4h23c2 0 3-1 4-3l13-50h57l-11 47v1c0 2 1 4 4 4h23c2 0 3-1 4-3l13-50h32c2 0 3-1 4-3l6-22v-1c0-2-1-4-4-4h-30l14-56h31c2 0 3-1 4-3l6-22v-1c-1 1-3-1-5-1zm-81 85h-58l14-56h57l-13 56z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3lmsfftj5fb";
freezeTemplate(tmpl);
