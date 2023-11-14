import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./propagation_policy.css";

import _implicitScopedStylesheets from "./propagation_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M136 20H80a60 60 0 00-60 60v40a60 60 0 0060 60h56a60 60 0 0060-60V80a60 60 0 00-60-60zm-20 112h-16a32 32 0 010-64h16a32 32 0 010 64zm188 48h56a60 60 0 0060-60V80a60 60 0 00-60-60h-56a60 60 0 00-60 60v40a60 60 0 0060 60zm20-112h16a32 32 0 110 64h-16a32 32 0 110-64zM136 228H80a60 60 0 00-60 60v40a60 60 0 0060 60h56a60 60 0 0060-60v-40a60 60 0 00-60-60zm-20 112h-16a32 32 0 110-64h16a32 32 0 110 64zm360 56h-80v-28a72 72 0 10-48 0v28h-80a24 24 0 00-24 24v56a24 24 0 1048 0v-32h56v32a24 24 0 1048 0v-32h56v32a24 24 0 1048 0v-56a24 24 0 00-24-24zM372 276a24 24 0 11-24 24 24 24 0 0124-24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6lginotant5";
freezeTemplate(tmpl);
