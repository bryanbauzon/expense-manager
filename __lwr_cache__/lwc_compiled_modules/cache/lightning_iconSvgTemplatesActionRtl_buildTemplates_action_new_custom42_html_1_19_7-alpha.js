import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom42.css";

import _implicitScopedStylesheets from "./new_custom42.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M452 40H68c-26 0-48 21-48 47v47c0 9 7 16 16 16h448c9 0 16-7 16-16V87c0-26-22-47-48-47zm0 157H68c-9 0-16 7-16 16v220c0 26 22 47 48 47h320c26 0 48-21 48-47V213c0-9-7-16-16-16zm-104 71c0 13-10 24-24 24H196c-13 0-24-10-24-24 0-13 10-24 24-24h128c14 0 24 10 24 24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5umcikb8jaq";
freezeTemplate(tmpl);
