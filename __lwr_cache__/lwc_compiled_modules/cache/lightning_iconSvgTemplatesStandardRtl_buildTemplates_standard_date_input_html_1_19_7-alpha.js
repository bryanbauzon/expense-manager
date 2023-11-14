import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./date_input.css";

import _implicitScopedStylesheets from "./date_input.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M76 42H24a2 2 0 00-2 2v30a6 6 0 006 6h44a6 6 0 006-6V44a2 2 0 00-2-2zM40 70a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4c0-1.1.9-2 2-2h4a2 2 0 012 2zm14 0a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4c0-1.1.9-2 2-2h4a2 2 0 012 2zm0-14a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4c0-1.1.9-2 2-2h4a2 2 0 012 2zm14 0a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4c0-1.1.9-2 2-2h4a2 2 0 012 2zm4-30h-5v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2H41v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2h-5a6 6 0 00-6 6v2c0 1.1.9 2 2 2h52a2 2 0 002-2v-2a6 6 0 00-6-6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2qlm4u5tamv";
freezeTemplate(tmpl);
