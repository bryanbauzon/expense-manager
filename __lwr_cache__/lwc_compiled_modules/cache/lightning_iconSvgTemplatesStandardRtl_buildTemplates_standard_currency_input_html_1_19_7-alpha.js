import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./currency_input.css";

import _implicitScopedStylesheets from "./currency_input.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M62.7 64.8c3.5-5.7 2.8-13.3-2.2-18.2a14.85 14.85 0 00-23.2 18.2zM80 26v48a6.02 6.02 0 01-6 6H26a6.02 6.02 0 01-6-6V26a6.02 6.02 0 016-6h48a6.02 6.02 0 016 6zM30 71.9h40a2 2 0 002-2V30a2 2 0 00-2-2H30a2 2 0 00-2 2v39.9c0 1.1.9 2 2 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6ir1jpdauqn";
freezeTemplate(tmpl);
