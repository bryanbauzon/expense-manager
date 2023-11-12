import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom82.css";

import _implicitScopedStylesheets from "./new_custom82.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M485 215H327c-8 0-15 7-15 15v7c0 12-10 22-23 22-12 0-23-10-23-22v-7c0-8-7-15-15-15h-38 1c-44 2-83 28-104 64-8-3-16-4-24-4-38 0-68 30-68 67s32 68 70 68c8 0 17-1 24-4 21 37 60 62 104 64 73 4 134-55 134-128 0-4 0-9-1-13-1-7 5-15 12-16l127-28c7-1 12-7 12-15v-40c0-8-7-15-15-15zM87 365c-13 0-23-10-23-22s10-22 23-22c3 0 7 1 9 2-2 9-2 19-2 28 0 5 1 8 2 12-3 1-6 2-9 2zm203-203c13 0 23-10 23-22V72c-1-12-11-22-23-22-13 0-23 10-23 22v68c0 13 10 22 23 22zm-108 8c5 5 11 7 17 7 5 0 11-1 15-5 10-8 11-22 2-31l-45-52c-8-10-23-10-32-2-10 8-11 22-2 31zm198 7c6 0 13-3 17-7l45-52c8-10 7-24-2-31-10-8-24-7-32 2l-45 52c-8 10-7 24 2 31 4 4 10 5 15 5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4ffkq23hvpm";
freezeTemplate(tmpl);
