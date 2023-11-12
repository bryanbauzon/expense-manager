import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./share_mobile.css";

import _implicitScopedStylesheets from "./share_mobile.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M420 504a40 40 0 0040-40V195a40 40 0 00-40-40h-75c-8 0-15 7-15 15v30c0 8 7 15 15 15h40c8 0 15 7 15 15v200c0 7-7 14-15 14H135c-8 0-15-7-15-15V230c0-8 7-15 15-15h40c8 0 15-7 15-15v-30c0-8-7-15-15-15h-75a40 40 0 00-40 40v270a40 40 0 0040 40h320zM290 309V115h59c10 0 15-10 9-14l-90-83c-4-3-10-3-14 0l-90 83c-6 6-1 14 9 14h56v194c0 8 8 16 16 16h30c8 0 15-8 15-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-56berj6jepk";
freezeTemplate(tmpl);
