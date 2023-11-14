import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./investment_account.css";

import _implicitScopedStylesheets from "./investment_account.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M740 270H260c-33 0-60 27-60 60v340c0 33 27 60 60 60h480c33 0 60-27 60-60V330c0-33-27-60-60-60zm-50 270c0 9-10 13-17 7l-46-46-106 91a29 29 0 01-42 0l-64-73-114 100c-4 4-10 4-14 0l-5-5c-4-4-4-10 0-14l112-153c12-12 31-12 42 0l64 64 65-75-42-38c-6-6-2-18 7-18h140c11 0 19 10 19 21v139z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3moohovo1kf";
freezeTemplate(tmpl);
