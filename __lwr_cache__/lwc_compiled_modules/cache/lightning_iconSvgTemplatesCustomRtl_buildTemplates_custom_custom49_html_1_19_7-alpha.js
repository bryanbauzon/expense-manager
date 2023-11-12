import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom49.css";

import _implicitScopedStylesheets from "./custom49.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50 41c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 14c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"${3}/><path d="M50 20a30 30 0 100 60 30 30 0 000-60zm0 52.9a2 2 0 01-2.2 2A25.1 25.1 0 0125 52.1c0-1.1.9-2.1 2.1-2.1h2c1 0 1.9.8 2 1.8.9 9 8.1 16.2 17.1 17.1a2 2 0 011.8 2v2zm0-7.9a15 15 0 110-30 15 15 0 010 30zm22.9-15h-2a2 2 0 01-2-1.8c-.9-9-8.1-16.2-17.1-17.1a2 2 0 01-1.8-2v-2a2 2 0 012.2-2A25.1 25.1 0 0175 47.9c0 1.1-.9 2.1-2.1 2.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-613g36kajfu";
freezeTemplate(tmpl);
