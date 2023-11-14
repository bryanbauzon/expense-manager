import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dislike.css";

import _implicitScopedStylesheets from "./dislike.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M120 295V90a40 40 0 00-40-40H55c-8 0-15 7-15 15v230c0 8 7 15 15 15h50c8 0 15-7 15-15zm360-35V135c0-87-69-95-144-95-71 0-94 27-162 30-8 0-14 7-14 15v200c0 8 7 15 15 15 48 0 85 52 85 105v60c0 8 7 15 15 15h25a40 40 0 0040-40V340a40 40 0 0140-40h60a40 40 0 0040-40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-258t6s4n9pr";
freezeTemplate(tmpl);
