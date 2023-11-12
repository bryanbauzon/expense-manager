import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./rules.css";

import _implicitScopedStylesheets from "./rules.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M501 254l-81-81a10 10 0 00-15 0l-15 15a10 10 0 000 15l25 25c4 4 1 12-5 12H189l132-131c4-4 12-1 12 5v36c0 6 4 10 10 10h21c6 0 10-4 10-10V34c0-6-4-10-10-10H250c-5 0-10 5-10 11v20c0 6 4 10 10 10h36c6 0 9 7 5 12L129 239H30c-6 0-10 5-10 11v21c0 6 6 11 11 11h100l161 161c4 4 1 12-5 12h-36c-6 0-10 4-10 10v20c0 5 4 10 10 11h114c6 0 10-4 10-10V371c0-6-4-10-10-10h-21c-6 0-10 4-10 10v36c0 6-7 9-12 5L190 282h221c6 0 9 8 5 12l-26 25a10 10 0 000 15l15 15a10 10 0 0015 0l81-80c4-5 4-11 0-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6tsu82r7olb";
freezeTemplate(tmpl);
