import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./orchestrator.css";

import _implicitScopedStylesheets from "./orchestrator.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M364 31a16 16 0 00-22-10 16 16 0 00-6 24l72 182c5 10 13 15 23 10a18 18 0 006-24zM262 157c41 0 74 38 74 84s-33 84-74 84-74-38-74-84 33-84 74-84zM92 343l106 12 24 145h-30a19 19 0 01-18-14l-21-78-91-10a48 48 0 01-39-63l47-137a28 28 0 0135-18 29 29 0 0117 36L83 331a10 10 0 008 12zm241 157h-32l24-143 100 20a10 10 0 0012-12l-14-65a29 29 0 0121-35 28 28 0 0134 21l20 93a47 47 0 01-53 58l-77-15-16 63a19 19 0 01-18 14zM233 373a11 11 0 01-18-10v-17a11 11 0 0117-10l29 18zm28-18l29-19a11 11 0 0117 10v18a11 11 0 01-17 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-m6n1q1chbl";
freezeTemplate(tmpl);
