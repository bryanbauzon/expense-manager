import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./gsheet.css";

import _implicitScopedStylesheets from "./gsheet.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#3ba755" d="M51 0A50 50 0 001 51v538a50 50 0 0050 51h458c28 0 51-23 51-51V203L371 0z"${3}/><path fill="#fff" d="M101 375v164h215V375zm150 115h50v35h-50zm0-50h50v35h-50zm0-51h50v36h-50zM115 490h122v35H115zm0-50h122v35H115zm0-51h122v36H115z"${3}/><path fill="#22683e" d="M560 203v10H432s-63-12-61-67c0 0 2 57 60 57z"${3}/><path fill="#cdefc4" d="M371 0v145c0 17 11 58 61 58h128z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 560 640",
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
tmpl.stylesheetToken = "lwc-64tue0op07g";
freezeTemplate(tmpl);
