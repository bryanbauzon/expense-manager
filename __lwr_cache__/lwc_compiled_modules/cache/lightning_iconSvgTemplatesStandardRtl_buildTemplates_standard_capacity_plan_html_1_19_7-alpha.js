import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./capacity_plan.css";

import _implicitScopedStylesheets from "./capacity_plan.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M39 32h22a2 2 0 002-2v-4a6 6 0 00-6-6H43a6 6 0 00-6 6v4a2 2 0 002 2zm10.8 16.4v11.4h10.7a9.9 9.9 0 00-3.1-7.8c-3.7-3.8-7.6-3.6-7.6-3.6zM72 25h-2a.9.9 0 00-1 1v4a8 8 0 01-8 8H39a8 8 0 01-8-8v-4a.9.9 0 00-1-1h-2a6 6 0 00-6 6v43a6 6 0 006 6h44a6 6 0 006-6V31a6 6 0 00-6-6zm-7.1 34.3a14.9 14.9 0 11-14.8-15 14.9 14.9 0 0114.8 15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-18k0gso9hso";
freezeTemplate(tmpl);
