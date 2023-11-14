import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./warranty_term.css";

import _implicitScopedStylesheets from "./warranty_term.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 200c38 0 68 41 101 55s85 7 110 33 19 76 33 111 56 63 56 101-41 68-55 101-7 85-33 110-76 19-110 33-64 56-102 56-68-41-101-55-85-7-110-33-19-76-33-110-56-64-56-102 41-68 55-101 7-85 33-110 76-19 111-34 63-55 101-55zm0 95a205 205 0 10205 205 206 206 0 00-205-205zm95 114l20 19a16 16 0 010 19L488 588a26 26 0 01-20 9 28 28 0 01-20-9l-69-68a13 13 0 010-19l20-19a14 14 0 0120 0l49 50 107-123a14 14 0 0120 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3vql609tjun";
freezeTemplate(tmpl);
