import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom33.css";

import _implicitScopedStylesheets from "./custom33.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M65 42H36a2 2 0 00-2 2v8c0 1.1.9 2 2 2h29a2 2 0 002-2v-8a2 2 0 00-2-2zm-14 9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm29-23H20a2 2 0 00-2 2v2a4 4 0 004 4v36c0 1.1.9 2 2 2h2a2 2 0 002-2V36h45v36c0 1.1.9 2 2 2h2a2 2 0 002-2V36h-1a4 4 0 004-4v-2a2 2 0 00-2-2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-sdbuhd2ung";
freezeTemplate(tmpl);
