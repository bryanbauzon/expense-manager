import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./variation_attribute_setup.css";

import _implicitScopedStylesheets from "./variation_attribute_setup.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M468 231a17 17 0 00-18 17v272a15 15 0 0017 17h1a16 16 0 0017-17V247a16 16 0 00-17-16zm-175 0h-67a16 16 0 00-17 17v272a16 16 0 0017 17h67a16 16 0 0017-17V247a17 17 0 00-17-16zm95 0h-17a16 16 0 00-17 17v272a15 15 0 0017 17h17a16 16 0 0017-17V247a16 16 0 00-17-16zm331 250v2l1 8a21 21 0 016 4l9-5 7-3 6-2V247a16 16 0 00-17-17h-34a16 16 0 00-17 17v190a58 58 0 0139 44zm-153 9l6 2a44 44 0 017-4l1-7v-2a60 60 0 0150-46V247a17 17 0 00-17-16h-67a16 16 0 00-17 17v240a68 68 0 0114-2 58 58 0 0123 4zm189 153a149 149 0 002-21 149 149 0 00-2-21l23-19a21 21 0 005-26l-10-18a22 22 0 00-18-10l-7 1-28 11a103 103 0 00-36-21l-5-29a20 20 0 00-21-15h-20a21 21 0 00-21 15l-5 28a105 105 0 00-37 21l-27-11a15 15 0 00-7-1 22 22 0 00-18 10l-10 17a20 20 0 005 26l23 19a149 149 0 00-2 21 149 149 0 002 21l-23 20a21 21 0 00-5 26l10 19a22 22 0 0018 10l7-1 28-11a103 103 0 0036 21l5 30a21 21 0 0021 17h20a21 21 0 0021-17l5-30a100 100 0 0038-23l26 11a17 17 0 007 1 22 22 0 0018-10l9-16a20 20 0 00-4-26zm-106 49a68 68 0 1168-68 68 68 0 01-68 68zm-1-105a37 37 0 1037 37 37 37 0 00-37-37z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-132vdlvb668";
freezeTemplate(tmpl);
