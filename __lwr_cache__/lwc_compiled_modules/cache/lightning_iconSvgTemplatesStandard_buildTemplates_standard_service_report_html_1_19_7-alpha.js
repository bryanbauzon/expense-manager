import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_report.css";

import _implicitScopedStylesheets from "./service_report.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M71.8 25h-2a.9.9 0 00-1 1v4a8 8 0 01-7.9 8H39.1a8 8 0 01-7.9-8v-4a.9.9 0 00-1-1h-2a6 6 0 00-6 6v43a6 6 0 006 6h43.6a6 6 0 006-6V31a6 6 0 00-6-6zM43.1 66a2 2 0 01-2 2h-2a2 2 0 01-2-2V56a2 2 0 012-2h2a2 2 0 012 2zm9.9 0a2 2 0 01-2 2h-2a2 2 0 01-2-2V47a2 2 0 012-2h2a2 2 0 012 2zm9.9 0a2 2 0 01-2 2h-2a2 2 0 01-2-2V51a2 2 0 012-2h2a2 2 0 012 2zM39.1 32h21.8a2 2 0 002-2v-4a6 6 0 00-5.9-6H43.1a6 6 0 00-6 6v4a2 2 0 002 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6c0tsucggmh";
freezeTemplate(tmpl);
