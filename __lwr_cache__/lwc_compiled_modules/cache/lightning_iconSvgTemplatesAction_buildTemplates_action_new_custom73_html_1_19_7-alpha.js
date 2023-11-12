import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom73.css";

import _implicitScopedStylesheets from "./new_custom73.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48 140h424c10 0 18-10 15-20-10-33-24-63-43-90-6-8-17-9-23-2-19 18-46 28-74 28-30 0-57-12-77-32-6-6-16-6-22 0a110 110 0 01-151 4c-6-6-16-5-22 3-19 26-34 57-43 90-2 9 6 19 16 19zm452 64c0-9-7-16-16-16H36c-9 0-16 7-16 16v3c0 150 104 274 240 293a289 289 0 00240-292z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5sa0j5lqoo4";
freezeTemplate(tmpl);
