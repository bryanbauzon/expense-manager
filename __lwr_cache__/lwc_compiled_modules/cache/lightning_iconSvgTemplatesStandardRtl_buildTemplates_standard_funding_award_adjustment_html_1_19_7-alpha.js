import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./funding_award_adjustment.css";

import _implicitScopedStylesheets from "./funding_award_adjustment.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M435 513v189c0 5 3 8 8 8l4-1c37-20 114-77 114-80 0-23 7-39 10-49s12-23 16-29a134 134 0 0136-36V413c0-4-3-8-8-8l-4 1-168 94a15 15 0 00-8 13zm-16-52l170-94c3-3 4-7 2-11l-3-2-152-87a50 50 0 00-49 1s-115 64-153 86c-4 2-4 7-2 11l2 2 170 94c4 2 11 2 15 0zm-39 39l-168-94c-4-2-9-1-11 3l-1 4v169c0 17 9 33 24 41l152 86c4 2 9 0 11-3l1-4V513a15 15 0 00-8-13z"${3}/><path fill-rule="evenodd" d="M800 628.2a110.6 110.6 0 11-221.2 0 110.6 110.6 0 01221.2 0zm-43.5-70.4h-41.9c-2.7 0-3.5 2.7-1.4 5.1l13.3 14.7-24.4 26.9c-1.4 1.5-1.4 3.9 0 5.7l10 11.1c1.4 1.5 3.5 1.5 5.1 0l24.6-27.2 13.3 14.7c2.2 2.4 4.6 1.5 4.6-1.5v-46c0-1.8-1.6-3.3-3.2-3.3zm-87.7 140.7h-45.4c-2.1 0-4.4-2.6-4.4-4.7v-45.2c0-2.9 2.9-3.8 5.6-1.5l14.7 14.4 26.5-26.4c1.8-1.5 4.1-1.5 5.6 0l10.9 10.9a4 4 0 010 5.6l-26.5 26.7 14.4 14.7c2.4 2.3 1.5 5.6-1.5 5.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-61df3rvbtc5";
freezeTemplate(tmpl);
