import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./swarm_session.css";

import _implicitScopedStylesheets from "./swarm_session.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M417 300a3 3 0 00-1-3l1 3zm0-3l1 3a54 54 0 005 10 87 87 0 00116 38 90 90 0 0035-31 207 207 0 01134 155l11-1a161 161 0 0148 8 262 262 0 00-181-218 83 83 0 00-8-29 87 87 0 00-117-38 86 86 0 00-47 93l3 10zm-49 279a87 87 0 00-68-47 105 105 0 01-1-18 207 207 0 0179-162l-8-13a172 172 0 01-14-43 265 265 0 00-115 218l2 31a87 87 0 10125 34zm427 0a86.8 86.8 0 00-155 78l4 7a202 202 0 01-233 32 125 125 0 01-42 42 261 261 0 00136 38 264 264 0 00186-77 82 82 0 0067-5 85 85 0 0037-115zm-377 5a4 4 0 005 5l32-14a6 6 0 017 2 83 83 0 0046 13c50 0 92-39 92-86s-42-86-92-86a89 89 0 00-91 86 85 85 0 0011 41 8 8 0 011 7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2pm4m1n7lo0";
freezeTemplate(tmpl);
