import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./high_velocity_sales.css";

import _implicitScopedStylesheets from "./high_velocity_sales.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 32c0-10-6-12-9-12H284c-15 0-15 15-15 15v29c0 13 8 16 12 16h144c6 1 15 5 15 21v136c1 4 3 13 15 13h32s13 0 13-15zM375 157c1-10-6-12-9-12H159c-15 0-15 15-15 15v29c0 13 8 16 12 16h144c6 1 15 5 15 21v136c1 4 3 13 15 13h32s13 0 13-15zM53 488c2 2 10 8 21-3l104-104c3-3 12-10 12 4v102c1 4 3 13 15 13h32s13 0 13-15V282c0-10-6-11-9-12H34c-15 0-15 15-15 15v29c0 13 8 16 12 16h96c4 0 16 1 5 12L32 444s-12 11-2 21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2kr48fem6e8";
freezeTemplate(tmpl);
