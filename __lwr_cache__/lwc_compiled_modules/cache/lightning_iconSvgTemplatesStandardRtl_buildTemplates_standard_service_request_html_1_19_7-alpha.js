import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_request.css";

import _implicitScopedStylesheets from "./service_request.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M386 572a93 93 0 01-4 25l115 121a36 36 0 0110 25 28 28 0 01-11 25 41 41 0 01-52-1L328 646a95 95 0 01-25 3 97 97 0 01-101-96 85 85 0 015-25c0-4 4-4 8-1l51 55a8 8 0 0012 0l36-35a10 10 0 000-14l-50-53c-2-2-2-8 2-8a119 119 0 0125-4 93 93 0 0195 104zm401-225a155 155 0 00-30-57 136 136 0 00-61-42 151 151 0 00-39-7 131 131 0 00-59 9 156 156 0 00-55 37l-18 20-2-1a201 201 0 00-31-33 148 148 0 00-43-25 136 136 0 00-57-8 145 145 0 00-55 15 140 140 0 00-66 69 186 186 0 00-16 71 171 171 0 003 37h2a161 161 0 0131-4h2a133 133 0 01134 147 84 84 0 01-1 10l100 105a77 77 0 0120 39 1066 1066 0 00114-94 679 679 0 0074-83 373 373 0 0041-67 202 202 0 0019-65 190 190 0 00-7-73z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-78khl7nu12t";
freezeTemplate(tmpl);
