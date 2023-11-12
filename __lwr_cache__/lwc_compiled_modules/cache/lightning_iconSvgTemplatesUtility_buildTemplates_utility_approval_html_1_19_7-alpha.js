import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./approval.css";

import _implicitScopedStylesheets from "./approval.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M452 292h-88a49 49 0 01-48-48c4-71 37-75 40-121a95 95 0 00-74-101 97 97 0 00-118 94c0 53 36 53 40 128 0 26-22 48-48 48H68a48 48 0 00-48 48v32c0 9 7 16 16 16h448c9 0 16-7 16-16v-32c0-27-22-48-48-48zm1 144H67c-9 0-15 7-15 15v1c0 26 22 48 48 48h321c26 0 47-22 47-48v-1c0-8-7-15-15-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3kt2c57hquo";
freezeTemplate(tmpl);
