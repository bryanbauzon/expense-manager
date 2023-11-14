import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./phone_landscape.css";

import _implicitScopedStylesheets from "./phone_landscape.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M520 130a40 40 0 00-40-40H40a40 40 0 00-40 40v260a40 40 0 0040 40h440a40 40 0 0040-40V130zM50 290c-17 0-30-13-30-30s13-30 30-30 30 13 30 30-13 30-30 30zm390 65c0 8-7 15-15 15H115c-8 0-15-7-15-15V165c0-8 7-15 15-15h310c8 0 15 7 15 15v190z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6mpteumcg0c";
freezeTemplate(tmpl);
