import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./restriction_policy.css";

import _implicitScopedStylesheets from "./restriction_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M372 244a128 128 0 10128 128 128 128 0 00-128-128zm56 152H316a24 24 0 010-48h112a24 24 0 110 48zM136 20H80a60 60 0 00-60 60v48a60 60 0 0060 60h56a60 60 0 0060-60V80a60 60 0 00-60-60zm-24 120h-8a36 36 0 010-72h8a36 36 0 110 72zm192 48h56a60 60 0 0060-60V80a60 60 0 00-60-60h-56a60 60 0 00-60 60v48a60 60 0 0060 60zm24-120h8a36 36 0 110 72h-8a36 36 0 110-72zM136 236H80a60 60 0 00-60 60v48a60 60 0 0060 60h56a60 60 0 0060-60v-48a60 60 0 00-60-60zm-24 120h-8a36 36 0 110-72h8a36 36 0 110 72z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-33lf7k9rhsa";
freezeTemplate(tmpl);
