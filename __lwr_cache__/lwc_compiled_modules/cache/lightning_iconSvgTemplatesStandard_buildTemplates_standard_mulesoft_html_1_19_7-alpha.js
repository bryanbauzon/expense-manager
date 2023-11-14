import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./mulesoft.css";

import _implicitScopedStylesheets from "./mulesoft.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 776.5c-150.9 0-273-122.9-273-274.6s122.1-274.7 273-274.7 273 122.9 273 274.6-122.1 274.6-273 274.6zm0-576.4c-165.3 0-300 133.7-300 300s134.7 300 300 300a300 300 0 100-600zM425 636a140 140 0 01-78-125c0-29 9-56 24-79l98 148h60l99-149a147 147 0 0123 80c0 52-27 98-68 121l20 72c71-38 122-114 122-200s-45-156-110-194L500 487 387 309a227 227 0 00-111 195c0 90 52 168 129 204l20-72v-1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-gifpnfjdpb";
freezeTemplate(tmpl);
