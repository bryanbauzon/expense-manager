import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./ad_set.css";

import _implicitScopedStylesheets from "./ad_set.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M225 51H55c-8 0-15 7-15 15v159c0 8 7 15 15 15h170c8 0 15-7 15-15V66c0-8-7-15-15-15zm-26 82H81V92h118v41zm266-82H295c-8 0-15 7-15 15v159c0 8 7 15 15 15h170c8 0 15-7 15-15V66c0-8-7-15-15-15zm-26 82H321V92h118v41zM225 280H55c-8 0-15 7-15 15v159c0 8 7 15 15 15h170c8 0 15-7 15-15V295c0-8-7-15-15-15zm-26 82H81v-41h118v41zm266-82H295c-8 0-15 7-15 15v159c0 8 7 15 15 15h170c8 0 15-7 15-15V295c0-8-7-15-15-15zm-26 82H321v-41h118v41z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5etn75e6jv6";
freezeTemplate(tmpl);
