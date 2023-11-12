import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom38.css";

import _implicitScopedStylesheets from "./custom38.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50 45a8 8 0 100 16 8 8 0 100-16zm24-10h-8.1c-.8 0-1.5-.4-1.8-1.2l-2.6-5.5a6 6 0 00-5.4-3.3H43.9a6 6 0 00-5.4 3.3l-2.6 5.5a2 2 0 01-1.8 1.2H26a6 6 0 00-6 6v28a6 6 0 006 6h48a6 6 0 006-6V41a6 6 0 00-6-6zM50 67.2c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14-6.3 14-14 14z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-a33joqc8do";
freezeTemplate(tmpl);
