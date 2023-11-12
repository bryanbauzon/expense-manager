import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./undeprecate.css";

import _implicitScopedStylesheets from "./undeprecate.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48 7H4a2 2 0 00-2 2v26c0 1.1.9 2 2 2h16.2a12 12 0 0023.66 0H48a2 2 0 002-2V9a2 2 0 00-2-2zM30.5 41.3l-5.9-5.9 2.8-2.8 3.1 3.1 7.1-7.1 2.8 2.8-9.9 9.9zM46 33h-2.2a12 12 0 00-23.66 0H6V11h40v22z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-14l4avoh99v";
freezeTemplate(tmpl);
