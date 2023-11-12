import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_mapping.css";

import _implicitScopedStylesheets from "./data_mapping.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M731 438a69 69 0 11-61 100h-11c-68 0-91 21-129 91l-2 4-3 5c-22 42-35 61-58 82-33 28-74 43-130 43h-7a69 69 0 110-63h11c69-1 92-22 131-96l3-5a344 344 0 0139-61H330a69 69 0 110-63h340a69 69 0 0159-37zm0-238a69 69 0 11-61 100H330a69 69 0 110-62h340a69 69 0 0161-38z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1aivjpaopgb";
freezeTemplate(tmpl);
