import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./folder.css";

import _implicitScopedStylesheets from "./folder.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M750 347H466c-18 0-34-10-44-25l-44-76c-8-16-24-26-43-26h-85c-28 0-50 23-50 51v458c0 28 22 51 50 51h500c28 0 50-23 50-51V398c0-28-22-51-50-51zm0-102H449c-5 0-8 5-5 9l20 34c2 5 6 8 11 8h275c14 0 28 3 39 8 5 3 11-1 11-8 0-28-22-51-50-51z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5kp7a06kpdd";
freezeTemplate(tmpl);
