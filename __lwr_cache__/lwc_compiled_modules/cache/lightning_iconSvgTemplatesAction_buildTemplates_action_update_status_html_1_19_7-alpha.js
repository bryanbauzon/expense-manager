import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./update_status.css";

import _implicitScopedStylesheets from "./update_status.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M298 306l16 16c4 4 10 4 14 0l46-47c4-4 6-9 6-14V80c0-17-13-30-30-30H50c-17 0-30 13-30 30v220c0 17 13 30 30 30h137c5 0 10-2 14-6l17-17c8-8 18-14 29-16 18-4 37 2 51 15zM100 140c0-6 4-10 10-10h180c6 0 10 4 10 10v20c0 6-4 10-10 10H110c-6 0-10-4-10-10zm10 110c-6 0-10-4-10-10v-20c0-6 4-10 10-10h140c6 0 10 4 10 10v20c0 6-4 10-10 10zm385 27l-22-22c-6-6-16-6-22 0L328 379c-4 4-11 4-15 0l-44-45c-6-6-16-6-22 0l-22 22c-6 6-6 16 0 22l85 86c6 6 16 6 22 0l163-164c7-7 7-17 0-23z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4rb209qu41e";
freezeTemplate(tmpl);
