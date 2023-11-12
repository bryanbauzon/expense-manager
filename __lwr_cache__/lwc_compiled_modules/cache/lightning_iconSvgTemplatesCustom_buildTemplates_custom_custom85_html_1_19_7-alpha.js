import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom85.css";

import _implicitScopedStylesheets from "./custom85.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M78 24H28v-2a2 2 0 00-2-2h-4a2 2 0 00-2 2v56c0 1.1.9 2 2 2h4a2 2 0 002-2V32h50a2 2 0 002-2v-4a2 2 0 00-2-2zm-4 14H40a6 6 0 00-6 6v22a6 6 0 006 6h34a6 6 0 006-6V44a6 6 0 00-6-6zm-5.5 17H66v10a.94.94 0 01-1 1h-4a.94.94 0 01-1-1v-6a.94.94 0 00-1-1h-4a.94.94 0 00-1 1v6a.94.94 0 01-1 1h-4a.94.94 0 01-1-1V55h-2.5a.5.5 0 01-.3-.9l11.2-10.9a1 1 0 011.3 0l11.2 10.9a.54.54 0 01-.4.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1htsg0osn02";
freezeTemplate(tmpl);
