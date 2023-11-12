import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./assignment.css";

import _implicitScopedStylesheets from "./assignment.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M36 298h446c9 0 16 7 16 16v32c0 9-7 16-16 16H36c-9 0-16-7-16-16v-32c0-9 7-16 16-16zm0-142h446c9 0 16 7 16 16v32c0 9-7 16-16 16H36c-9 0-16-7-16-16v-32c0-8 7-16 16-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3ca7j1lp3mv";
freezeTemplate(tmpl);
