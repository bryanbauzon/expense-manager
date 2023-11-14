import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./omni_supervisor.css";

import _implicitScopedStylesheets from "./omni_supervisor.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M672 289c-64 26-98 88-102 191h103a80 80 0 110 40H570c4 103 38 165 102 191a80 80 0 112 43c-91-28-139-107-144-234h-60a20 20 0 110-40h60c5-127 53-206 144-234a80 80 0 11-2 43zm78 21a40 40 0 100-80 40 40 0 000 80zm0 460a40 40 0 100-80 40 40 0 000 80zm0-230a40 40 0 100-80 40 40 0 000 80zM451 680H225c-26 0-45-24-45-51 1-40 43-61 86-80 30-13 34-24 34-37s-8-25-17-34a85 85 0 01-27-66c0-49 30-92 83-92 54 0 83 43 83 92 0 27-8 49-26 66-11 9-18 21-18 34 0 12 4 24 34 37 43 19 85 40 86 80-3 27-22 51-47 51z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-1tjac0kms46";
freezeTemplate(tmpl);
