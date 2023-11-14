import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./reset_password.css";

import _implicitScopedStylesheets from "./reset_password.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M420 230H100a40 40 0 00-40 40v190a40 40 0 0040 40h320a40 40 0 0040-40V270a40 40 0 00-40-40zM310 445a89 89 0 01-50 15l-18-2a88 88 0 01-57-38l33-22a47 47 0 0032 21c13 3 26 0 38-8a50 50 0 0014-69 47 47 0 00-32-21c-13-3-26 0-38 8l-7 6 35 35h-90v-90l26 26 13-11c20-13 44-18 68-14a91 91 0 0133 164zM100 181v4-4zm10 9h40c6 0 10-3 10-9v-1A100 100 0 01267 80c53 4 93 50 93 104v-3c0 6 4 9 10 9h40c6 0 10-3 10-9v-1A160 160 0 00252 20c-85 4-150 76-152 161 1 5 5 9 10 9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7eq9p0ggbrr";
freezeTemplate(tmpl);
