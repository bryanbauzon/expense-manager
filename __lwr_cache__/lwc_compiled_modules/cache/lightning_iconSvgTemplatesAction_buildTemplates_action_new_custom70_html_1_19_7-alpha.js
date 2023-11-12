import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom70.css";

import _implicitScopedStylesheets from "./new_custom70.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M244 370l-92-91a51 51 0 00-69 0l-58 57c-6 6-6 17 0 22l11 12 11 11 93 91 6 6 18 17c6 6 17 6 23 0l58-57c18-18 18-49-1-68zM94 336l12-11c6-6 16-6 22 0l70 68c6 6 6 17 0 22l-12 11c-6 6-16 6-22 0l-70-68c-7-6-7-16 0-22zm100-83l75 73c2 2 3 2 6 2l34-1c4 0 7-3 7-7l1-30c0-4 3-7 7-7l30-1c4 0 7-3 7-7l1-30c0-4 3-7 7-7l30-1c4 0 7-3 7-7l1-30c0-4 3-7 7-7l30-1c4 0 7-3 7-7l1-30c0-4 3-6 6-7l33-5c6-1 9-7 6-12L428 27c-6-8-17-9-24-2L193 233c-5 5-5 14 1 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-54b45f3akl3";
freezeTemplate(tmpl);
