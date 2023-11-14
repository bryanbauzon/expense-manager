import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./activations.css";

import _implicitScopedStylesheets from "./activations.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M780 600a20 20 0 0120 20v160a20 20 0 01-20 20H620a20 20 0 01-20-20V620a20 20 0 0120-20zM402 269l129 2a12 12 0 0112 12l2 129a12 12 0 01-12 12h-23a12 12 0 01-12-12l-1-40a8 8 0 00-13-6l-79 79a103 103 0 0115 55 111 111 0 01-19 62l83 83a8 8 0 0013-6l1-40a12 12 0 0112-12l24-1a12 12 0 0112 12l-2 129a12 12 0 01-12 12l-129 2a12 12 0 01-12-12v-23a12 12 0 0112-12l40-1a8 8 0 006-13l-84-84a112 112 0 01-55 14 110 110 0 1162-201l78-78a8 8 0 00-6-13l-40-1a12 12 0 01-12-12l-1-24a11 11 0 0111-12zm338 391h-80v80h80zM310 450a50 50 0 1050 50 50 50 0 00-50-50zm470-250a20 20 0 0120 20v160a20 20 0 01-20 20H620a20 20 0 01-20-20V220a20 20 0 0120-20zm-40 60h-80v80h80z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1su7maiq8do";
freezeTemplate(tmpl);
