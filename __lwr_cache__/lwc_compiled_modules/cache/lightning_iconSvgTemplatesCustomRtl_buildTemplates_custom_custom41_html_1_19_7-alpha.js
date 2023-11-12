import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom41.css";

import _implicitScopedStylesheets from "./custom41.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M76 29H24a6 6 0 00-6 6v29a6 6 0 006 6h52a6 6 0 006-6V35a6 6 0 00-6-6zM31 64a7 7 0 00-7-7V42a7 7 0 007-7h38a7 7 0 007 7v15a7 7 0 00-7 7H31z"${3}/><circle cx="50" cy="49" r="10"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-70usjb30iuf";
freezeTemplate(tmpl);
