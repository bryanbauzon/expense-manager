import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./capslock.css";

import _implicitScopedStylesheets from "./capslock.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M436 211L272 25c-6-7-18-7-24 0L84 211c-6 7-1 19 9 19h77v125c0 8 7 15 15 15h150c8 0 15-7 15-15V230h77c10 0 15-12 9-19zM335 430H185c-8 0-15 7-15 15v40c0 8 7 15 15 15h150c8 0 15-7 15-15v-40c0-8-7-15-15-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7t7t24ee8o";
freezeTemplate(tmpl);
