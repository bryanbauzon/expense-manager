import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom98.css";

import _implicitScopedStylesheets from "./custom98.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M81.4 46.4l-7.8-7.8a2 2 0 00-1.4-.6H64a2 2 0 00-2 2v16a1 1 0 001.4.9 12 12 0 0115.1 5.3c.3.5 1 .7 1.5.3 1.2-1.1 2-2.7 2-4.5V47.8c0-.5-.2-1-.6-1.4z"${3}/><path d="M54 29H20a2 2 0 00-2 2v27c0 1.8.8 3.4 2 4.5.5.4 1.2.3 1.5-.3a12 12 0 0121.6 1.2c.2.4.5.6.9.6h6a6 6 0 006-6V31a2 2 0 00-2-2z"${3}/><circle cx="68" cy="68" r="6"${3}/><circle cx="32" cy="68" r="6"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3ra2pv5lhs9";
freezeTemplate(tmpl);
