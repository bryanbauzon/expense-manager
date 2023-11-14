import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./operating_hours.css";

import _implicitScopedStylesheets from "./operating_hours.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M530 502a13 13 0 01-3-10v-84a14 14 0 00-14-14h-26a14 14 0 00-13 14v106a19 19 0 004 10l65 65a13 13 0 0018 0l19-19a13 13 0 000-18zm-30-213a211 211 0 10212 211 212 212 0 00-212-211zm0 370a159 159 0 11159-159 159 159 0 01-159 159z"${3}/><path d="M288 599a157 157 0 010-198l-35-41a210 210 0 000 279zm424-198a157 157 0 010 198l34 41a210 210 0 000-279z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2d8tv2imu1k";
freezeTemplate(tmpl);
