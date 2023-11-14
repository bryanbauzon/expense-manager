import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shift.css";

import _implicitScopedStylesheets from "./shift.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M720 260h-50v-20c0-22-18-40-40-40s-40 18-40 40v20H410v-20c0-22-18-40-40-40s-40 18-40 40v20h-50c-33 0-60 27-60 60v20c0 11 9 20 20 20h520c11 0 20-9 20-20v-20c0-33-27-60-60-60zm40 160H240c-11 0-20 9-20 20v300c0 33 27 60 60 60h440c33 0 60-27 60-60V440c0-11-9-20-20-20zM500 759a149 149 0 010-298 149 149 0 010 298zm-23-88c-4 0-7-2-10-4l-50-50c-2-2-2-6 0-9l11-11c2-2 6-2 9 0l40 40 85-85c2-2 6-2 9 0l11 11c2 2 2 6 0 9l-96 96c-2 1-5 3-9 3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-78o3afi5caq";
freezeTemplate(tmpl);
