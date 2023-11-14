import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./rules.css";

import _implicitScopedStylesheets from "./rules.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M23 269l81 80a10 10 0 0015 0l15-15a10 10 0 000-15l-26-25c-4-4-1-12 5-12h221L202 412c-5 4-12 1-12-5v-36c0-6-4-10-10-10h-21c-6 0-10 4-10 10v115c0 6 4 10 10 10h114c6-1 10-6 10-11v-20c0-6-4-10-10-10h-36c-6 0-9-8-5-12l161-161h100c5 0 11-5 11-11v-21c0-6-4-11-10-11h-99L233 77c-4-5-1-12 5-12h36c6 0 10-4 10-10V35c0-6-5-11-10-11H160c-6 0-10 4-10 10v116c0 6 4 10 10 10h21c6 0 10-4 10-10v-36c0-6 8-9 12-5l132 131H114c-6 0-9-8-5-12l25-25a10 10 0 000-15l-15-15a10 10 0 00-15 0l-81 81c-4 4-4 10 0 15z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 520 520",
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
tmpl.stylesheetToken = "lwc-2lghgms050o";
freezeTemplate(tmpl);
