import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./slider.css";

import _implicitScopedStylesheets from "./slider.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M43 23.1h5a2 2 0 012 2v2a2 2 0 01-2 2h-5c-.6 0-.9-.5-.8-1 0 0 .3-1 .3-2s-.3-2.1-.3-2.1c-.1-.6.3-1 .8-.9zM10.8 41H4a2 2 0 00-2 2v2c0 1.1.9 2 2 2h6.8a6 6 0 100-6zm15.4 1s.3 1.1.3 2.1-.3 2-.3 2c-.1.5.2 1 .8 1h21a2 2 0 002-2v-2a2 2 0 00-2-2H27c-.6-.1-.9.3-.8.9zm4-36s.3 1.1.3 2.1-.3 2-.3 2c-.1.5.2 1 .8 1h17a2 2 0 002-2v-2a2 2 0 00-2-2H31c-.5-.1-.9.3-.8.9zM14.8 5H4a2 2 0 00-2 2v2c0 1.1.9 2 2 2h10.8A6 6 0 0026 8a6 6 0 00-11.2-3zm12 18H4a2 2 0 00-2 2v2c0 1.1.9 2 2 2h22.8a6 6 0 100-6z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-7camkpu4h5e";
freezeTemplate(tmpl);
