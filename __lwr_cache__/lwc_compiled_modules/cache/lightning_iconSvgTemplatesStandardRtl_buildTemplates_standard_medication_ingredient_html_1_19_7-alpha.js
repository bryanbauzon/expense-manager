import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./medication_ingredient.css";

import _implicitScopedStylesheets from "./medication_ingredient.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M611 217H340a14 14 0 00-14 13v37a14 14 0 0014 13h270a14 14 0 0014-13v-37a14 14 0 00-14-13zm70 346a111 111 0 101 0zm0 56a14 14 0 11-14 14 14 14 0 0114-14zm23 97a4 4 0 01-4 4h-38a4 4 0 01-4-4v-9a5 5 0 015-5 4 4 0 004-4v-19a5 5 0 00-5-5 4 4 0 01-4-4v-10a5 5 0 015-5h27a5 5 0 015 5v37a4 4 0 004 4 5 5 0 015 6zm-164-42a142 142 0 01108-137V407a93 93 0 00-92-94H396a93 93 0 00-94 92v26h170a15 15 0 0115 15v170a15 15 0 01-15 16H302v75a14 14 0 0015 13h230a138 138 0 01-7-46z"${3}/><rect width="134" height="31" x="303" y="476" rx="10"${3}/><rect width="94" height="31" x="303" y="553" rx="10"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-28e09tpcpcv";
freezeTemplate(tmpl);
