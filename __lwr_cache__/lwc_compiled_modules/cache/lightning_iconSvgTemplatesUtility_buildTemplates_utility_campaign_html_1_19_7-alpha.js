import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./campaign.css";

import _implicitScopedStylesheets from "./campaign.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 8a252 252 0 100 504 252 252 0 000-504zm0 454c-111 0-202-91-202-202S149 58 260 58s202 91 202 202-91 202-202 202zm0-353c-83 0-151 68-151 151s68 151 151 151 151-68 151-151-68-151-151-151zm0 252c-55 0-101-45-101-101s46-101 101-101 101 46 101 101-46 101-101 101zm0-151c-28 0-50 23-50 50s23 50 50 50 50-23 50-50-22-50-50-50z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1eu2vd1bq4q";
freezeTemplate(tmpl);
