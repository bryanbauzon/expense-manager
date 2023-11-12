import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./print.css";

import _implicitScopedStylesheets from "./print.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M465 174H55a40 40 0 00-40 40v140a40 40 0 0040 40h59v58a40 40 0 0040 40h213a40 40 0 0040-40v-58h59a40 40 0 0040-40V214c-1-22-19-40-41-40zM83 277a30 30 0 01-30-30c0-17 13-30 30-30s30 13 30 30a30 30 0 01-30 30zm276 154c0 8-7 15-15 15H174c-8 0-15-7-15-15v-98c0-8 7-15 15-15h170c8 0 15 7 15 15v98zm46-320c0 8-7 15-15 15H128c-8 0-15-7-15-15V43c0-8 7-15 15-15h262c8 0 15 7 15 15v68z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1lvsf31r115";
freezeTemplate(tmpl);
