import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./high_velocity_sales.css";

import _implicitScopedStylesheets from "./high_velocity_sales.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M800 215c0-12-7-15-11-15H531c-19 0-19 19-19 19v36c0 16 10 20 15 20h180c7 1 19 6 19 26v170c1 5 4 16 19 16h40s16 0 16-19V215zM644 371c1-12-7-15-11-15H375c-19 0-19 19-19 19v36c0 16 10 20 15 20h180c7 1 19 6 19 26v170c1 5 4 16 19 16h40s16 0 16-19V371zM242 785c2 2 12 10 26-4l130-130c4-4 15-12 15 5v128c1 5 4 16 19 16h40s16 0 16-19V528c0-12-7-14-11-15H219c-19 0-19 19-19 19v36c0 16 10 20 15 20h120c5 0 20 1 6 15L216 730s-15 14-2 26z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5eijb3o6lh2";
freezeTemplate(tmpl);
