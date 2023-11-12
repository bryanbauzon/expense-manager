import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./password.css";

import _implicitScopedStylesheets from "./password.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M448 495H72a47 47 0 01-47-47V72c0-26 21-47 47-47h376c26 0 47 21 47 47v376c0 25-21 47-47 47zM89 103v313c0 9 7 16 16 16h312c9 0 16-7 16-16V103c0-9-7-16-16-16H104c-8 1-15 8-15 16zm299 135l-9-30c-3-8-11-13-20-10l-68 22v-67c0-9-7-16-16-16h-31c-9 0-16 7-16 16v67l-66-22c-8-3-17 2-20 10l-9 30c-3 8 2 17 10 20l62 20-45 61c-5 7-3 17 4 22l26 18c7 5 17 3 22-4l49-68 49 68c5 7 15 9 22 4l26-18c7-5 9-15 4-22l-45-62 61-20c8-2 12-10 10-19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-o51tacl0dv";
freezeTemplate(tmpl);
