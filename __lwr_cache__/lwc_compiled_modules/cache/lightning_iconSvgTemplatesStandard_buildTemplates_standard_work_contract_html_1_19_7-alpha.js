import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_contract.css";

import _implicitScopedStylesheets from "./work_contract.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M563 340h91a12 12 0 0012-12 11 11 0 00-4-9L550 206a13 13 0 00-9-4 12 12 0 00-12 12v91a36 36 0 0034 35zm76 212a123 123 0 10123 123 123 123 0 00-123-123zm21 134l-10-1-47 46a12 12 0 01-10 5 13 13 0 01-10-4 17 17 0 010-21l47-47a28 28 0 01-1-10 39 39 0 0137-41l10 1 1 4-21 21a5 5 0 000 5l15 15a6 6 0 006 0l21-21c1-1 4-1 4 1a38 38 0 011 10 40 40 0 01-43 37zM516 566c43-50 113-53 123-53s27-1 26-15v-89a16 16 0 00-17-17H528a51 51 0 01-51-51V221a16 16 0 00-17-17H290a53 53 0 00-51 51v411a51 51 0 0051 51h174s17-10 16-24-6-78 36-127zM360 249a37 37 0 11-37 37 37 37 0 0137-37zm-57 129a56 56 0 0156-48h2a56 56 0 0156 48 9 9 0 01-10 9h-96c-8 0-8-5-8-9zm150 219a16 16 0 01-17 17H324a16 16 0 01-17-17v-17a16 16 0 0117-17h112a16 16 0 0117 17zm-129-86a16 16 0 01-17-17v-17a16 16 0 0117-17h206a16 16 0 0117 17v17a16 16 0 01-17 17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-16v457fglva";
freezeTemplate(tmpl);
