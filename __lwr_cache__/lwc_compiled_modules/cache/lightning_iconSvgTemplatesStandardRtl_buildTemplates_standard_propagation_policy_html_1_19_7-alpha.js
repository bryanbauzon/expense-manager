import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./propagation_policy.css";

import _implicitScopedStylesheets from "./propagation_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M36 20H26a6 6 0 00-6 6v8a6 6 0 006 6h10a6 6 0 006-6v-8a6 6 0 00-6-6zm-4 14h-2a4 4 0 010-8h2a4 4 0 010 8zm22 6h10a6 6 0 006-6v-8a6 6 0 00-6-6H54a6 6 0 00-6 6v8a6 6 0 006 6zm4-14h2a4 4 0 010 8h-2a4 4 0 010-8zM36 46H26a6 6 0 00-6 6v8a6 6 0 006 6h10a6 6 0 006-6v-8a6 6 0 00-6-6zm-4 14h-2a4 4 0 010-8h2a4 4 0 010 8zm45 7H67v-3.5a9 9 0 10-6 0V67H51a3 3 0 00-3 3v7a3 3 0 006 0v-4h7v4a3 3 0 006 0v-4h7v4a3 3 0 006 0v-7a3 3 0 00-3-3zM64 52a3 3 0 11-3 3 3 3 0 013-3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-79snbsk2plj";
freezeTemplate(tmpl);
