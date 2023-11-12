import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./prompt_edit.css";

import _implicitScopedStylesheets from "./prompt_edit.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M470 45H50a30 30 0 00-30 30v306a30 30 0 0030 30h145l36 52a30 30 0 0042 7l6-6 42-53h149a30 30 0 0030-30V75a30 30 0 00-30-30zM213 320c-2 2-3 3-5 3l-50 12a7 7 0 01-8-8l12-50 2-4 1-1h6l42 42v6zm121-123L231 300c-2 2-5 2-6 0l-41-41c-2-1-2-4 0-6l102-103c2-2 5-2 6 0l41 41c2 2 2 4 1 6zm31-30l-12 12c-2 2-5 2-6 0l-41-41c-2-2-2-5 0-6l11-12c7-7 19-7 26 0l22 22c7 7 7 18 0 25z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2avqnfe9r31";
freezeTemplate(tmpl);
