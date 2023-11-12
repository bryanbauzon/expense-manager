import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contact.css";

import _implicitScopedStylesheets from "./contact.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M452 91H68a48 48 0 00-48 48v232c0 26 22 48 48 48h384c26 0 48-22 48-48V139c0-26-22-48-48-48zM249 363H110c-15 0-27-17-27-33 0-24 26-38 52-50 18-8 20-15 20-23s-4-16-10-21a54 54 0 01-17-40c0-30 18-56 50-56s50 25 50 56c0 16-5 30-16 40-7 5-11 13-11 20s2 16 20 23c27 11 52 27 52 51 2 16-10 33-25 33zm187-56c0 9-7 16-16 16h-72a16 16 0 01-16-16v-24c0-9 7-16 16-16h72c9 0 16 7 16 16v24zm0-88c0 9-7 16-16 16H300a16 16 0 01-16-16v-24c0-9 7-16 16-16h120c9 0 16 7 16 16v24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-d6p9na3b8a";
freezeTemplate(tmpl);
