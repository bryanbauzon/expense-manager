import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./variable.css";

import _implicitScopedStylesheets from "./variable.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M426 178c24 0 72-20 72-84s-46-68-61-68c-28 0-56 20-81 63l-53 91h-1l-13-67c-5-27-36-84-99-84-64 0-122 37-122 37a40 40 0 00-17 33c0 21 17 39 39 39 6 0 12-2 17-4 0 0 48-27 59 0l9 27a1900 1900 0 0133 135l-42 60s-47-17-71-17-72 20-72 84 46 68 61 68c28 0 56-20 81-63l53-91 19 85c16 45 53 72 101 72 0 0 50 0 109-33a39 39 0 00-15-75c-6 0-12 2-17 4 0 0-42 24-56 5-10-20-19-46-26-78l-20-95 43-62c-1 1 46 18 70 18z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-79hejl2stj1";
freezeTemplate(tmpl);
