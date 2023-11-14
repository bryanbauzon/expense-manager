import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./unified_health_score.css";

import _implicitScopedStylesheets from "./unified_health_score.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M74 29.5H26a6 6 0 00-6 6v29a6 6 0 006 6h48a6 6 0 006-6v-29a6 6 0 00-6-6zM27.6 42.8a5.9 5.9 0 018.3-.3 3.7 3.7 0 01.3.3l.5.6a.7.7 0 001 .1.8.8 0 00.1-.1l.4-.5a5.8 5.8 0 014.4-2 5.8 5.8 0 014.4 1.9 6.6 6.6 0 010 9l-8.1 8.6a2.2 2.2 0 01-3.1.2l-.2-.2-8-8.5c-1.9-2.4-1.3-6.3 0-9.1zM53 57.9v-3a2 2 0 012-2h15.1a2 2 0 012 2v3a2 2 0 01-2 2H55a2 2 0 01-2-1.9zm19-12.1a2 2 0 01-2 2h-9.1a2 2 0 01-2-2v-3a2 2 0 012-2H70a2 2 0 012 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5chmtqahi4g";
freezeTemplate(tmpl);
