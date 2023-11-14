import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./coupon_codes.css";

import _implicitScopedStylesheets from "./coupon_codes.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M80 42v-9a3 3 0 00-3-3H38v2h-2v-2H23a3 3 0 00-3 3v9a8 8 0 010 16v9a3 3 0 003 3h13v-2h2v2h39a3 3 0 003-3v-9a8 8 0 010-16zM38 64h-2v-4h2zm0-8h-2v-4h2zm0-8h-2v-4h2zm0-8h-2v-4h2zm13 13.62L49.13 55l-2-2.75L45 55l-1.87-1.33 2-2.9-3.11-1 .69-2.18 3 1v-3.54h2.53v3.52l3-1 .68 2.18-3.11 1zm15.84 0L65 55l-2-2.75L60.85 55 59 53.62l2-2.9-3.11-1 .68-2.18 3 1v-3.49h2.53v3.52l3-1 .69 2.18-3.11 1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-14vbfn4jcvd";
freezeTemplate(tmpl);
