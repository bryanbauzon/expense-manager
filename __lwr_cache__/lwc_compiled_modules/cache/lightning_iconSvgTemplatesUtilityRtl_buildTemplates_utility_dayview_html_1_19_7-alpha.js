import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dayview.css";

import _implicitScopedStylesheets from "./dayview.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M440 70h-50V50a30 30 0 10-60 0v20H190V50a30 30 0 10-60 0v20H80a40 40 0 00-40 40v25c0 8 7 15 15 15h410c8 0 15-7 15-15v-25a40 40 0 00-40-40zm25 130H55c-8 0-15 7-15 15v245a40 40 0 0040 40h360a40 40 0 0040-40V215c0-8-7-15-15-15zM290 420v2c0 8-10 18-20 18s-20-10-20-20V320l-15 16c-3 3-6 4-10 4-8 0-15-7-15-15 0-4 2-8 5-11l39-39a20 20 0 0115-6c11 0 21 9 21 20v131z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1c75s66jk3m";
freezeTemplate(tmpl);
