import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./log_a_call.css";

import _implicitScopedStylesheets from "./log_a_call.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M697 200H321c-33 0-61 30-61 60v20h-20c-22 0-40 18-40 40s18 40 40 40h20v100h-20c-22 0-40 18-40 40s18 40 40 40h20v100h-20c-22 0-40 18-40 40s18 40 40 40h20v20c0 30 28 60 61 60h376c33 0 63-30 63-63V257c0-33-30-57-63-57zm-36 403l-28 28c-6 6-15 10-23 9a264 264 0 01-249-249c0-9 3-17 9-23l28-28c13-13 35-12 46 3l26 32c9 11 9 26 1 38l-22 31c-3 4-3 10 1 13l46 51 51 46c4 4 9 4 13 1l31-22c11-8 27-8 38 1l32 26c12 8 13 30 0 43z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5t3lr8fubvi";
freezeTemplate(tmpl);
