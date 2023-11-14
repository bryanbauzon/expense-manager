import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./price_sheet.css";

import _implicitScopedStylesheets from "./price_sheet.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M766 440a68 68 0 00-71 0c-10 7-19 17-25 28H330a67 67 0 00-115-12 70 70 0 0038 112c15 4 30 2 44-5 15-6 26-17 33-31h340a70 70 0 0059 38 68 68 0 0061-34 70 70 0 00-24-97zm0-230a68 68 0 00-71 0c-10 7-19 17-25 28H330a67 67 0 00-115-12 70 70 0 0038 112c15 4 30 2 44-5 15-6 26-17 33-31h340a70 70 0 0059 38 68 68 0 0061-34 70 70 0 00-24-97zm0 460a68 68 0 00-71 0c-10 7-19 17-25 28H330a67 67 0 00-115-12 70 70 0 0038 112c15 4 30 2 44-5 15-6 26-17 33-31h340a70 70 0 0059 38 68 68 0 0061-34 70 70 0 00-24-97z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7tk673g1b9m";
freezeTemplate(tmpl);
