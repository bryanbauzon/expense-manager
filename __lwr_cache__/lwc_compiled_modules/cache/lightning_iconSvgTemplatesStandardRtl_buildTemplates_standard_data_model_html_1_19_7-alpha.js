import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_model.css";

import _implicitScopedStylesheets from "./data_model.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M727 658a66 66 0 00-32 8l-88-65a114 114 0 0012-52 119 119 0 00-89-115V334a70 70 0 0040-62 69 69 0 10-138 0 67 67 0 0040 62v100a119 119 0 00-89 115 114 114 0 0012 52l-88 65a72 72 0 00-32-8 69 69 0 1069 69l-1-13 92-68a116 116 0 00136 0l92 68a57 57 0 00-1 13 69 69 0 00138 0 74 74 0 00-73-69zm-213-51a68 68 0 01-14 2 61 61 0 01-57-44 77 77 0 01-2-15 58 58 0 0130-51 60 60 0 0160 0 58 58 0 0130 51 77 77 0 01-2 15 65 65 0 01-45 42z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2perss737bq";
freezeTemplate(tmpl);
