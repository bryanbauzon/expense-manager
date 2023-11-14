import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./picklist_type.css";

import _implicitScopedStylesheets from "./picklist_type.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M21 133v-32c0-9 7-16 16-16h319c9 0 16 7 16 16v32c0 9-7 16-16 16H37c-9 0-16-7-16-16zm0 143v-32c0-9 7-16 16-16h319c9 0 16 7 16 16v32c0 9-7 16-16 16H37c-9 0-16-7-16-16zm414 0v-32c0-9 7-16 16-16h32c9 0 16 7 16 16v32c0 9-7 16-16 16h-32c-9 0-16-7-16-16zm0-143v-32c0-9 7-16 16-16h32c9 0 16 7 16 16v32c0 9-7 16-16 16h-32c-9 0-16-7-16-16zm0 286v-32c0-9 7-16 16-16h32c9 0 16 7 16 16v32c0 9-7 16-16 16h-32c-9 0-16-7-16-16zm-414 0v-32c0-9 7-16 16-16h319c9 0 16 7 16 16v32c0 9-7 16-16 16H37c-9 0-16-7-16-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-22n4q4tmlq6";
freezeTemplate(tmpl);
