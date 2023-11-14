import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./graph.css";

import _implicitScopedStylesheets from "./graph.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 41c0-9-7-16-16-16h-28c-9 0-16 7-16 16v379c0 8-7 15-15 15H36c-9 0-16 7-16 16v28c0 9 7 16 16 16h424a40 40 0 0040-40V41zM32 163l108 107 1 1 1 1 1 1 2 1 3 2 2 1 4 1h2l6 1 6-1 2-1 4-1 2-1 3-2 2-2 3-2 57-56 98 97c5 4 12 7 19 7a30 30 0 0030-30 30 30 0 00-10-22L264 150l-3-2-2-2-3-2-2-1-4-1-2-1-6-1-6 1-2 1-4 1-2 1-3 2-2 1-2 2-1 1-59 56-86-86c-6-5-13-9-22-9a30 30 0 00-30 30c0 9 4 16 9 22z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-31qo5e54nme";
freezeTemplate(tmpl);
