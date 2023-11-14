import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./qualifications.css";

import _implicitScopedStylesheets from "./qualifications.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M184 359a4 4 0 01-3 2h-15a4 4 0 01-3-2 4 4 0 010-3l104-192a4 4 0 013-1h16a4 4 0 011 5zm-21-167a21 21 0 11-21 21 21 21 0 0121-21m0-27a49 49 0 1049 48 49 49 0 00-49-48zm309 95a13 13 0 00-10 4L326 414a4 4 0 01-3 1 4 4 0 01-3-1l-47-46a13 13 0 00-19 0l-18 19a13 13 0 000 18l73 72a22 22 0 0031-1l161-176a13 13 0 00-1-19l-20-18a13 13 0 00-8-3zm-39-16l-17 18-10-12-3-4-20-23a74 74 0 01-17-43l-3-34a18 18 0 00-16-17l-30-2a89 89 0 01-51-22l-23-20a18 18 0 00-12-5 18 18 0 00-11 5l-25 20a83 83 0 01-48 20l-32 2a18 18 0 00-17 16l-2 30a89 89 0 01-22 51l-20 23a18 18 0 000 23l22 26a79 79 0 0118 46l2 32a18 18 0 0017 17l30 3a89 89 0 0151 22l22 20 2 1 27 26a44 44 0 01-17 3 44 44 0 01-29-11l-23-20a62 62 0 00-35-15l-30-3a44 44 0 01-40-41l-3-33a54 54 0 00-12-30l-22-26a44 44 0 011-57l20-23a64 64 0 0015-37l2-29a44 44 0 0141-40l33-3a57 57 0 0032-13l25-21a44 44 0 0157 1l23 20a64 64 0 0036 15l30 2a44 44 0 0140 41l3 35a48 48 0 0011 28l22 27a40 40 0 018 11zm-169 85a48 48 0 0134 14l12 12a49 49 0 10-70-44 48 48 0 005 22 48 48 0 0119-4zm4-18a21 21 0 1121 21 21 21 0 01-21-21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5m5sj02geo6";
freezeTemplate(tmpl);
