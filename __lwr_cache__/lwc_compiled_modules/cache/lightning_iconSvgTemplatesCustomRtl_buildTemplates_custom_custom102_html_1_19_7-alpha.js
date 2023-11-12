import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom102.css";

import _implicitScopedStylesheets from "./custom102.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M312 607h-88a12 12 0 00-11 11v178a12 12 0 0011 11h88a12 12 0 0012-11V618a11 11 0 00-12-11zm161-55h-87c-6 0-12 5-12 12v232a12 12 0 0012 12h87a12 12 0 0012-12V564a12 12 0 00-12-12zm161-200h-87a12 12 0 00-12 11v433a12 12 0 0012 12h87a12 12 0 0012-12V363a11 11 0 00-12-11zm162-140h-88a12 12 0 00-12 12v572a12 12 0 0012 12h88a12 12 0 0012-12V224a12 12 0 00-12-12z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4v6r9kufnnv";
freezeTemplate(tmpl);
