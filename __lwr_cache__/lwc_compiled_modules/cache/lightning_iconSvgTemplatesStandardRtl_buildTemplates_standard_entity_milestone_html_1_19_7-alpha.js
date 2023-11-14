import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./entity_milestone.css";

import _implicitScopedStylesheets from "./entity_milestone.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M742 329L531 211a66 66 0 00-64 0L256 330a62 62 0 00-32 54v237c1 22 13 42 32 54l211 119c20 11 44 11 64 0l211-119c20-11 32-32 31-54V383c0-22-12-43-31-54zm-334 76v250c0 12-9 21-21 22-12 0-21-10-21-22V405c-7-7-11-16-11-25 0-18 15-32 33-31s32 15 31 33c0 9-4 17-11 23zm257 157c0 4-2 7-5 9-83 46-129-28-205-4-6 2-12-1-14-7V415c0-4 3-8 7-10 79-30 125 48 209 3 3-1 6 0 7 2l1 3v149z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-78l9r0bvong";
freezeTemplate(tmpl);
