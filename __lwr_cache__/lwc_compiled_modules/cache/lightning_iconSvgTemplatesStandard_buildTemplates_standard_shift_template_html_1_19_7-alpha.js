import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shift_template.css";

import _implicitScopedStylesheets from "./shift_template.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M72 26h-5v-2a4 4 0 00-8 0v2H41v-2a4 4 0 00-8 0v2h-5a6 6 0 00-6 6v2a2 2 0 002 2h52a2 2 0 002-2v-2a6 6 0 00-6-6zm4 16H24a2 2 0 00-2 2v30a6 6 0 006 6h44a6 6 0 006-6V44a2 2 0 00-2-2zM45.3 74.1a1 1 0 01-1.1 1H37a1 1 0 01-1-1.1V59.9a1 1 0 011.1-1h7.3a1 1 0 011 1.1zm19.9.2a1 1 0 01-1.1 1H50.7a1 1 0 01-1-1.1V59.9a1 1 0 011.1-1h13.5a1 1 0 011 1.1zm.2-20.6a1 1 0 01-1.1 1H37a1 1 0 01-1-1.1v-6.3a1 1 0 011.1-1h27.2a1 1 0 011 1.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4f1usrqhrf6";
freezeTemplate(tmpl);
