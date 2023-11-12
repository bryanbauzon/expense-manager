import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./home.css";

import _implicitScopedStylesheets from "./home.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M490 270h-50v220c0 6-4 10-10 10H330c-6 0-10-4-10-10V320H200v170c0 6-4 10-10 10H90c-6 0-10-4-10-10V270H30c-4 0-8-2-9-6-2-4-1-8 2-11L253 23c4-4 11-4 14 0l230 230c3 3 3 7 2 11s-5 6-9 6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2d7qtvnq94l";
freezeTemplate(tmpl);
