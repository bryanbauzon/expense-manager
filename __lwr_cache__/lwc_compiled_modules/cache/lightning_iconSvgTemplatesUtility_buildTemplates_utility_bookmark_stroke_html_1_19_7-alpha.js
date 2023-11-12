import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bookmark_stroke.css";

import _implicitScopedStylesheets from "./bookmark_stroke.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M390 490c0 8-11 13-17 6l-99-99c-6-6-15-6-21 0L147 497c-7 6-17 2-17-7V60a40 40 0 0140-40h180a40 40 0 0140 40v430zm-55-90a8 8 0 0014-6V70a8 8 0 00-8-8H180a8 8 0 00-8 8v330a8 8 0 0013 6l40-38a55 55 0 0179 0l33 33z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-40ge9mv0r6";
freezeTemplate(tmpl);
