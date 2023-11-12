import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom52.css";

import _implicitScopedStylesheets from "./custom52.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M799 351c2-32 0-64-5-95-4-26-24-46-50-50-32-5-63-7-95-5-9 0-13 11-7 17l140 140c6 6 17 1 17-7zM563 223c-5-5-13-7-19-5a475 475 0 00-325 321c-2 7 0 15 5 20l218 218c5 5 13 7 20 5a475 475 0 00321-325c2-7 0-14-5-19zm-84 393a29 29 0 01-42 0l-56-56a29 29 0 010-42c12-12 31-12 42 0l56 56c12 11 12 30 0 42zm70-70a29 29 0 01-42 0l-56-56a29 29 0 010-42c12-12 31-12 42 0l56 56c12 11 12 30 0 42zm70-71a29 29 0 01-42 0l-56-56a29 29 0 010-42c12-12 31-12 42 0l56 56c12 12 12 31 0 42zM201 643c-2 34-1 68 5 102 4 26 24 46 50 50 34 5 68 7 102 5 9-1 13-11 7-17L218 636c-6-6-17-2-17 7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6rfq4a3hs6v";
freezeTemplate(tmpl);
