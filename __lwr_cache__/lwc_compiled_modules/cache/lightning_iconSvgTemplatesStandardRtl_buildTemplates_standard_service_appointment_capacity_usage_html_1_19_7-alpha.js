import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_appointment_capacity_usage.css";

import _implicitScopedStylesheets from "./service_appointment_capacity_usage.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M720 260h-50v-20c0-22-18-40-40-40s-40 18-40 40v20H410v-20c0-22-18-40-40-40s-40 18-40 40v20h-50c-33 0-60 27-60 60v20c0 11 9 20 20 20h520c11 0 20-9 20-20v-20c0-33-27-60-60-60zm40 160H240c-11 0-20 9-20 20v300c0 33 27 60 60 60h440c33 0 60-27 60-60V440c0-11-9-20-20-20zM649 611a149 149 0 01-298-2c1-82 68-149 150-148 82 0 148 69 148 150zM498 502v114h107s6-40-31-78-76-36-76-36z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-46jemimsc3g";
freezeTemplate(tmpl);
