import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./text_color.css";

import _implicitScopedStylesheets from "./text_color.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M104 360h41c6 0 12-5 14-11l32-89h134l35 89c2 6 8 11 14 11h41c7 0 12-7 9-13L304 50c-2-6-7-10-13-10h-71c-6 0-12 4-14 10L96 347c-3 6 2 13 8 13zm147-260h9l43 100h-90zm234 320H35c-8 0-15 7-15 15v30c0 8 7 15 15 15h450c8 0 15-7 15-15v-30c0-8-7-15-15-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6ubls5jgu30";
freezeTemplate(tmpl);
