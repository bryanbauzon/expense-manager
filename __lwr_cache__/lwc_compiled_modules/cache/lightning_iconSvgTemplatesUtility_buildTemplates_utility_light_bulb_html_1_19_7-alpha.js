import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./light_bulb.css";

import _implicitScopedStylesheets from "./light_bulb.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M241 27A161 161 0 0097 170a159 159 0 0058 137 50 50 0 0120 38 40 40 0 0040 40h90a40 40 0 0040-40 50 50 0 0119-39 159 159 0 0060-122A163 163 0 00240 27zm89 405H190a16 16 0 00-16 15 47 47 0 0047 47h79a47 47 0 0047-47 16 16 0 00-16-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2kvhbhad36c";
freezeTemplate(tmpl);
