import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./stage.css";

import _implicitScopedStylesheets from "./stage.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M116 260c0 79 65 144 144 144a144 144 0 10-144-144zm239 0a96 96 0 11-192 0 96 96 0 01192 0z"${3}/><circle cx="467" cy="260" r="34"${3}/><circle cx="259" cy="260" r="34"${3}/><circle cx="54" cy="260" r="34"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6csdji7ieqf";
freezeTemplate(tmpl);
