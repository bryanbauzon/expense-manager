import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./selling_model.css";

import _implicitScopedStylesheets from "./selling_model.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M734 278h-20v-26a33 33 0 00-33-33h-11a33 33 0 00-33 33v26h-99l1-26a33 33 0 00-33-33h-12a33 33 0 00-33 33l1 26H359v-26a33 33 0 00-33-33h-11a33 33 0 00-33 33v26h-16a66 66 0 00-66 67v370a66 66 0 0066 66h468a66 66 0 0066-66V345a66 66 0 00-66-67v1zM399 658h-56V430h56zm80 0h-38V430h38zm93 0h-55V430h55zm84 0h-38V430h39z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4mae1lv6ler";
freezeTemplate(tmpl);
