import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./solution.css";

import _implicitScopedStylesheets from "./solution.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M476 201c-98 11-177 88-185 184-6 70 25 134 75 175 15 12 24 30 24 49v1c0 28 23 51 52 51h116c29 0 52-23 52-51v-1c0-19 9-37 24-49 46-38 76-94 76-157 0-120-107-215-234-202zm114 519H410c-11 0-20 9-20 20 0 33 27 60 60 60h100c33 0 60-27 60-60 0-11-9-20-20-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5qm05mte8od";
freezeTemplate(tmpl);
