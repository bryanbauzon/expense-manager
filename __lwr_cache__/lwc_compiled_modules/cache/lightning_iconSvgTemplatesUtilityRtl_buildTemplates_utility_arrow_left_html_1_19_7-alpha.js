import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./arrow_left.css";

import _implicitScopedStylesheets from "./arrow_left.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M102 423a20 20 0 01-20 20H40a20 20 0 01-20-20V97a20 20 0 0120-20h41a20 20 0 0120 20zm398-143a21 21 0 01-20 20H306a13 13 0 00-10 23l48 48a20 20 0 010 28l-28 30a19 19 0 01-27 0L139 274a20 20 0 010-29L289 92a19 19 0 0127 0l28 28a20 20 0 010 29l-47 48a13 13 0 009 22h174a22 22 0 0120 21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-n99hljr2f2";
freezeTemplate(tmpl);
