import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bundles_pricing.css";

import _implicitScopedStylesheets from "./bundles_pricing.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M448 299c-8 0-15-4-18-11l-38-74c-3-6 2-14 9-14h198c7 0 12 7 9 14l-40 74c-3 7-10 11-18 11zm-8 60h119c99 0 181 81 181 181v200c0 33-28 60-61 60H320c-33 0-60-27-60-60V540c0-100 81-181 180-181zm118 83l-74-2-9 2c-2 1-5 2-7 5L346 568a23 23 0 000 32l134 134a23 23 0 0032 0l122-122 5-7 1-9-2-74a22 22 0 00-6-16l-58-58c-5-4-10-6-16-6zM431 570l12-11a5 5 0 016-2l2 2 71 70 2 2v4l-2 2-12 12-2 2h-4l-2-2-71-71-1-2-1-2 1-2zm33-33l12-12 4-2 4 2 71 71 2 1v5l-2 2-12 12-1 1-3 1-2-1-2-1-71-71-1-2-1-2 1-3 1-2zm116-54c4 1 8 3 11 6a23 23 0 010 32 21 21 0 01-24 5 22 22 0 010-42c4-1 8-2 13-1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1aude4pipfk";
freezeTemplate(tmpl);
