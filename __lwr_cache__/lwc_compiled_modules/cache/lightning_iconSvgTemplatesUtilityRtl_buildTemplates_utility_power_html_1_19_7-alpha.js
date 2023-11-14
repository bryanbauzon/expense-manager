import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./power.css";

import _implicitScopedStylesheets from "./power.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M344 77a10 10 0 00-14 9v38a20 20 0 0010 17 160 160 0 01-62 298 160 160 0 01-98-298c6-3 10-10 10-17V86a10 10 0 00-14-9A220 220 0 0041 300a221 221 0 00194 199 220 220 0 00245-219c0-92-56-170-136-203zm-54-42c0-8-7-15-15-15h-30c-8 0-15 7-15 15v170c0 8 7 15 15 15h30c8 0 15-7 15-15V35z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-51kmvf8o9vi";
freezeTemplate(tmpl);
