import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./anywhere_chat.css";

import _implicitScopedStylesheets from "./anywhere_chat.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 27C128 27 20 123 20 243v4a206 206 0 0077 154l3 3a111 111 0 01-30 48 18 18 0 0014 31h12l5-2c47-7 81-16 102-26l2-1 5 1a274 274 0 0050 5c132 0 240-96 240-216S392 27 260 27z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4u2so53n0pu";
freezeTemplate(tmpl);
