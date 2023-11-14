import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./apps_admin.css";

import _implicitScopedStylesheets from "./apps_admin.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M73 21H27a6 6 0 00-6 6v46a6 6 0 006 6h46a6 6 0 006-6V27a6 6 0 00-6-6zm-2 52H29a2 2 0 01-2-2V29c0-1.1.9-2 2-2h42a2 2 0 012 2v42a2 2 0 01-2 2zM45 33H35a2 2 0 00-2 2v10c0 1.1.9 2 2 2h10a2 2 0 002-2V35a2 2 0 00-2-2zm20 0H55a2 2 0 00-2 2v10c0 1.1.9 2 2 2h10a2 2 0 002-2V35a2 2 0 00-2-2zM45 53H35a2 2 0 00-2 2v10c0 1.1.9 2 2 2h10a2 2 0 002-2V55a2 2 0 00-2-2zm20 0H55a2 2 0 00-2 2v10c0 1.1.9 2 2 2h10a2 2 0 002-2V55a2 2 0 00-2-2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2rg1sil6786";
freezeTemplate(tmpl);
