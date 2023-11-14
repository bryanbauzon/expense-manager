import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./attach.css";

import _implicitScopedStylesheets from "./attach.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M176 367c6 6 15 5 21 0l100-100a20 20 0 0128 0c9 8 8 22 0 30L202 418a70 70 0 01-99 0l-1-1a70 70 0 010-99l217-217a70 70 0 0199 0l1 1a70 70 0 010 99l-1 1c-5 5-6 12-2 18a150 150 0 0114 35c2 8 11 10 17 5l15-16a131 131 0 000-185h-2a131 131 0 00-185 0L58 275a131 131 0 000 185l2 2a130 130 0 00184 0l124-123a81 81 0 10-117-113l-98 98c-6 6-6 16 0 22z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1sl0ttnvp7b";
freezeTemplate(tmpl);
