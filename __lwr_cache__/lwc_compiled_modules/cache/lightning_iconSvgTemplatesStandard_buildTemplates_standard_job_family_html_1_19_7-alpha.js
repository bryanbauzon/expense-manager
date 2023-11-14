import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./job_family.css";

import _implicitScopedStylesheets from "./job_family.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M488 796c28 0 12-19 12-19a192.2 192.2 0 01-42-120 186.5 186.5 0 0117-79l2-4a11.7 11.7 0 00-9-19 177 177 0 00-23-1 243.5 243.5 0 00-241 209c0 12 4 35 42 35h237c4-2 4-2 5-2zm165-284a142.5 142.5 0 10142 143 142.5 142.5 0 00-142-143zm0 45a32.2 32.2 0 0132 32 30.6 30.6 0 01-7 20l23 43c1 2 0 4-2 4a27 27 0 00-11 5c-2 1-4 0-4-1l-22-41a30.8 30.8 0 01-9 1 32.2 32.2 0 01-32-32 30.8 30.8 0 0132-31zm-20 82l-22 41a32.6 32.6 0 0110 23 32 32 0 11-32-32h4l23-43c1-2 2-2 5-1a28.7 28.7 0 0011 6c1 4 2 6 1 6zm83 98a32.9 32.9 0 01-30-19h-44c-2 0-4-2-2-4a24.8 24.8 0 001-9v-2c0-2 1-4 2-4h42a31.2 31.2 0 0131-26 32.2 32.2 0 0132 32 34.4 34.4 0 01-32 32z"${3}/><circle cx="446" cy="362" r="161"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6c05q9mrri";
freezeTemplate(tmpl);
