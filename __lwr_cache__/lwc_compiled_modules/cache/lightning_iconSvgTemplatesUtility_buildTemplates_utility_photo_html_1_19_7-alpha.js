import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./photo.css";

import _implicitScopedStylesheets from "./photo.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 200c-44 0-80 36-80 80s36 80 80 80 80-36 80-80-36-80-80-80z"${3}/><path d="M460 140h-52c-14 0-26-7-34-18l-23-35a45 45 0 00-42-27h-98c-18 0-35 10-43 27l-23 35a40 40 0 01-34 18H60a40 40 0 00-40 40v240a40 40 0 0040 40h400a40 40 0 0040-40V180a40 40 0 00-40-40zM260 400c-66 0-120-54-120-120s54-120 120-120 120 54 120 120-54 120-120 120z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3aahn3a726s";
freezeTemplate(tmpl);
