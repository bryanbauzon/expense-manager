import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./currency.css";

import _implicitScopedStylesheets from "./currency.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M451 109H69c-24 0-44 20-44 44v213c0 24 20 44 44 44h382c24 0 44-20 44-44V154c0-25-20-45-44-45zM120 366c0-29-23-51-51-51V205c29 0 51-23 51-51h280c0 29 23 51 51 51v110c-29 0-51 23-51 51H120z"${3}/><circle cx="260" cy="256" r="73"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4s6bi7mba2h";
freezeTemplate(tmpl);
