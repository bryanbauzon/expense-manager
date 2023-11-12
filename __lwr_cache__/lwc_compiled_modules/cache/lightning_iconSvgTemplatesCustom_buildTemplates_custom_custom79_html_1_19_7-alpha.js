import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom79.css";

import _implicitScopedStylesheets from "./custom79.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M39 41a7 7 0 00-7 7c0 3.9 3.1 7 7 7s7-3.1 7-7a7 7 0 00-7-7zm40 22H60v-8h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2.3c-1.6-10-10-17.8-20.4-18A21 21 0 0018 48.3 21.3 21.3 0 0039.5 69H76v2c0 1.1.9 2 2 2h2a2 2 0 002-2v-5a3 3 0 00-3-3zm-40-2a13 13 0 110-26 13 13 0 110 26z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-690vh4eofgk";
freezeTemplate(tmpl);
