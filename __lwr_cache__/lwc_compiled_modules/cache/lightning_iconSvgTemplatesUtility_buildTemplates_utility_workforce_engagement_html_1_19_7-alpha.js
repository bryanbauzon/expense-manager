import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./workforce_engagement.css";

import _implicitScopedStylesheets from "./workforce_engagement.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M403 180a163.6 163.6 0 00-327.1 0 81.8 81.8 0 006.4 156.2 164 164 0 00157 121 160 160 0 0057-10l-4-4a92 92 0 01-18-27 123 123 0 01-34 5 126 126 0 01-120-86 174 174 0 0084 23 12 12 0 0013 9h46a14 14 0 005-2 13 13 0 007-11v-28a14 14 0 00-12-14h-46a15 15 0 00-12 9c-50-3-86-25-91-47a179 179 0 018-41 190 190 0 0026 0 176 176 0 00137-67 139 139 0 0067 54c0 3 2 5 3 8a177 177 0 0111 62v4a83 83 0 0133 13 83 83 0 0147-15 16 16 0 013 0 78 78 0 008-35 82 82 0 00-54-77zm10 314a20 20 0 01-28 0l-70-75a58 58 0 010-78 52 52 0 0173-3l2 3 4 5a7 7 0 0010 0h1l3-5h1a50 50 0 0172-3l3 3a58 58 0 010 78l-70 75z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2bim0ul8jlt";
freezeTemplate(tmpl);
