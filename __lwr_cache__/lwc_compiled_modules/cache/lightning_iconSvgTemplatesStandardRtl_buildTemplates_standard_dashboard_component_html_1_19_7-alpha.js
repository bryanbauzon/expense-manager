import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dashboard_component.css";

import _implicitScopedStylesheets from "./dashboard_component.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M437 200H239a40 40 0 00-39 39v198a40 40 0 0039 39h198a40 40 0 0039-39V239a40 40 0 00-39-39zm324 0H563a40 40 0 00-39 39v198a40 40 0 0039 39h198a40 40 0 0039-39V239a40 40 0 00-39-39zM437 524H239a40 40 0 00-39 39v198a40 40 0 0039 39h198a40 40 0 0039-39V563a40 40 0 00-39-39zm324 0H563a40 40 0 00-39 39v198a40 40 0 0039 39h198a40 40 0 0039-39V563a40 40 0 00-39-39z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-68266adgd37";
freezeTemplate(tmpl);
