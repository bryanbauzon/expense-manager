import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./duration_downscale.css";

import _implicitScopedStylesheets from "./duration_downscale.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M170 20H80a60 60 0 00-60 60v57a60 60 0 0060 59h91a60 60 0 0060-60V79a60 60 0 00-60-59zm-32 128h-25a40 40 0 010-80h25a40 40 0 010 80zm207 48h90a60 60 0 0060-60V79a60 60 0 00-60-59h-90a60 60 0 00-60 60v57a60 60 0 0060 59zm32-128h25a40 40 0 010 80h-25a40 40 0 010-80zM171 244H80a60 60 0 00-60 60v57a60 60 0 0060 59h91a60 60 0 0060-60v-57a60 60 0 00-60-59zm-33 128h-25a40 40 0 110-80h25a40 40 0 010 80zm360 30a8 8 0 00-2-3l-18-15a14 14 0 00-19 0l-29 26c-6 5-15 2-15-5V255a13 13 0 00-14-11h-26a13 13 0 00-13 11v150c0 6-10 9-15 5l-30-26a14 14 0 00-19 0l-18 15a10 10 0 00-2 13 8 8 0 002 2l100 83a14 14 0 0018 0l99-83a10 10 0 002-13z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-69tgs9vsacn";
freezeTemplate(tmpl);
