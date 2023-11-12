import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom98.css";

import _implicitScopedStylesheets from "./new_custom98.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M496 221l-59-59c-3-3-7-5-10-5h-61c-8 0-15 7-15 15v121c0 5 5 9 11 7 10-5 22-7 34-7a90 90 0 0179 47c2 4 8 5 11 2 9-8 15-20 15-34v-77c-1-3-2-7-5-10zM350 385a45 45 0 1190 0 45 45 0 01-90 0zM290 90H35c-8 0-15 7-15 15v204c0 14 6 26 15 34 4 3 9 2 11-2a90 90 0 01162 9c1 3 4 5 7 5h45a45 45 0 0045-45V105c0-8-7-15-15-15zM80 385a45 45 0 1190 0 45 45 0 01-90 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4bvg7af0rpd";
freezeTemplate(tmpl);
