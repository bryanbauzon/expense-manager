import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./hide_mobile.css";

import _implicitScopedStylesheets from "./hide_mobile.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M361 253v141c0 7-6 14-14 14H206l-86 86c6 4 13 6 20 6h240c20 0 37-17 37-37V197zM260 481c-16 0-28-12-28-28s12-28 28-28 28 12 28 28-12 28-28 28zm-157-25l57-57v-1l202-202v1l55-55v-1l70-70c7-6 8-17 3-22l-20-19c-6-6-16-5-22 3l-31 31v-7c0-20-17-37-37-37H140c-20 0-37 17-37 37v321l-71 71c-6 6-7 16-2 21l19 20c6 6 16 5 22-3zm55-348c0-7 6-14 14-14h175c7 0 14 6 14 14v12L158 322z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3q5kr5psero";
freezeTemplate(tmpl);
