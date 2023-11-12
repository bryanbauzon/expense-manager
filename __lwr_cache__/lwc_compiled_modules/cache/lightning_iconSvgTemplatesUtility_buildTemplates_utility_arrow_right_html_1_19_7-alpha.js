import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./arrow_right.css";

import _implicitScopedStylesheets from "./arrow_right.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M418 97a20 20 0 0120-20h42a20 20 0 0120 20v326a20 20 0 01-20 20h-41a20 20 0 01-20-20zM20 240a21 21 0 0120-20h174a13 13 0 0010-22l-49-48a20 20 0 010-29l28-29a19 19 0 0127 0l150 154a20 20 0 010 29L230 428a19 19 0 01-27 0l-27-28a20 20 0 010-29l47-48a13 13 0 00-9-22H40a22 22 0 01-20-21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4igsct2uf09";
freezeTemplate(tmpl);
