import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./collection_variable.css";

import _implicitScopedStylesheets from "./collection_variable.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M450 20H70a50 50 0 00-50 50v380a50 50 0 0050 50h380a50 50 0 0050-50V70a50 50 0 00-50-50zm-24 394c-1 6-7 11-14 11H102c-6 0-11-6-11-13V106c0-6 6-11 13-11h310c6 0 11 6 11 13v306zm-96-190c10 0 31-8 31-36s-20-29-26-29c-12 0-24 9-35 27l-23 39-6-29c-2-11-15-36-43-36-27 0-52 16-52 16-5 3-8 8-8 14 0 9 7 17 17 17l7-2s21-12 25 0l4 11 14 58-18 26s-20-7-31-7-31 8-31 36 20 29 26 29c12 0 24-9 35-27l23-39 8 36a44 44 0 0043 31s21 0 47-14c6-2 10-8 10-15 0-9-7-17-17-17l-7 2s-18 10-24 2a426 426 0 01-19-74l18-26c2 0 22 7 32 7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-iso4r3e4uo";
freezeTemplate(tmpl);
