import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tax_rate.css";

import _implicitScopedStylesheets from "./tax_rate.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M184 19l130 72a12 12 0 015 9v9a11 11 0 01-11 11H35a11 11 0 01-10-11V99c0-3 2-6 5-8l130-72c3-3 7-4 12-4s8 1 12 4zm-38 54c0 14 11 26 26 26s26-12 26-26-11-27-26-27-26 12-26 27zm73 186v-97a11 11 0 00-10-11h-11a11 11 0 00-10 11v116h-32V162a11 11 0 00-10-11h-11a11 11 0 00-10 11v116H93V162a11 11 0 00-10-11H72a11 11 0 00-10 11v116h-6a32 32 0 00-31 31v11a11 11 0 0010 10h169a77 77 0 01-3-21c0-19 7-36 18-50zm63-28v-69a11 11 0 00-10-10h-11a11 11 0 00-10 10v74a78 78 0 0129-5h2zm24 261l-1 2a4 4 0 01-3 1h-17l-3-1-2-2a4 4 0 010-2 4 4 0 010-2l129-236a5 5 0 011-1 6 6 0 013-1h19l2 3v3L306 492zm129-85a26 26 0 0115 4 26 26 0 0111 27 25 25 0 01-8 13 25 25 0 01-28 6 27 27 0 01-11-10 25 25 0 01-5-14 26 26 0 018-18 26 26 0 0118-8zm0-34a60 60 0 00-42 102 60 60 0 0030 17 60 60 0 0035-4 60 60 0 0037-55 60 60 0 00-4-23 61 61 0 00-13-20 60 60 0 00-20-13 60 60 0 00-23-4zm-154-86a26 26 0 0125 31 25 25 0 01-7 13 26 26 0 01-13 7c-5 1-10 1-15-1a27 27 0 01-11-10 26 26 0 0121-40zm0-34a59 59 0 00-33 10 60 60 0 00-23 27 59 59 0 00-3 34 61 61 0 0047 48 59 59 0 0035-4 60 60 0 0037-55c0-16-6-32-17-43a60 60 0 00-43-17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-61g93b759cj";
freezeTemplate(tmpl);
