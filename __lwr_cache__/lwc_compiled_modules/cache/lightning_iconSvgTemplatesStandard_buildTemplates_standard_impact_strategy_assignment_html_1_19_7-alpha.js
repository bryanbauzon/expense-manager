import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./impact_strategy_assignment.css";

import _implicitScopedStylesheets from "./impact_strategy_assignment.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M604 299c-20 0-38 2-55 8 21 17 39 38 54 61h1a127 127 0 11-50 244c9-13 17-27 23-40 2-6 5-10 6-16a196 196 0 10-383-61 196 196 0 00251 188c-21-17-39-38-54-61h-1a127 127 0 1151-244 196 196 0 10157-79z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1do11k6287l";
freezeTemplate(tmpl);
