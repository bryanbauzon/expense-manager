import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom13.css";

import _implicitScopedStylesheets from "./custom13.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M74 22H26a6 6 0 00-6 6v6c0 1.1.9 2 2 2h56a2 2 0 002-2v-6a6 6 0 00-6-6zm0 20H26a2 2 0 00-2 2v28a6 6 0 006 6h40a6 6 0 006-6V44a2 2 0 00-2-2zm-13 9a3 3 0 01-3 3H42a3 3 0 110-6h16a3 3 0 013 3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-156qqsblnni";
freezeTemplate(tmpl);
