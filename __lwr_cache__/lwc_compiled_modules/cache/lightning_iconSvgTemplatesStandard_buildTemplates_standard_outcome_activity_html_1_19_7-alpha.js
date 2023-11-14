import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./outcome_activity.css";

import _implicitScopedStylesheets from "./outcome_activity.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M417 300l-1-2zm0-2l1 2 5 10a87 87 0 00151 7c68 24 119 83 133 155l12-1c16 0 32 3 48 8a261 261 0 00-181-218c-1-10-4-19-8-28a87 87 0 00-164 54zm-49 277a87 87 0 00-68-46l-1-18c0-63 29-123 79-162l-8-12c-7-14-11-28-14-43a264 264 0 00-113 248 87 87 0 10125 33zm426 0a86.6 86.6 0 00-154 79l4 6c-63 60-156 73-232 33-11 17-25 31-42 42a263 263 0 00321-39c21 8 46 6 66-5 42-21 59-73 38-115zm-376 6c0 2 1 4 3 5h2l32-14c3-1 5 0 7 1 14 9 30 14 46 14 50 0 92-39 92-86s-42-86-92-86c-49-1-89 37-91 86 1 14 4 28 12 41l1 6z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-5oub8eeo3f";
freezeTemplate(tmpl);
