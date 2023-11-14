import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./textarea.css";

import _implicitScopedStylesheets from "./textarea.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M448 495H72a47 47 0 01-47-47V72c0-26 21-47 47-47h376c26 0 47 21 47 47v376c0 26-21 47-47 47zM88 103v313c0 9 7 16 16 16h313c9 0 16-7 16-16V103c0-9-7-16-16-16H104c-9 1-16 8-16 16zm265 167c8 0 16 7 16 16v68c0 9-7 16-16 16h-72c-9 0-15-7-16-16 0-6 3-10 6-14l15-15 31-28 22-20 6-5 8-2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-i95s3981dl";
freezeTemplate(tmpl);
