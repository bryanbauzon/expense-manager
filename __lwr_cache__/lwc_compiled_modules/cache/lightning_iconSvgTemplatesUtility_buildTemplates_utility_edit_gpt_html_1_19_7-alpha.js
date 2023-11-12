import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./edit_gpt.css";

import _implicitScopedStylesheets from "./edit_gpt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M132 348l80 80c4 3 10 3 13 0l200-201a9 9 0 000-13l-80-80a9 9 0 00-12 0L132 337c-4 3-4 9 0 11zM372 98a9 9 0 000 12l79 80c3 3 9 3 12 0l23-23a34 34 0 000-50l-42-42a36 36 0 00-52 0zM65 480a13 13 0 0015 16l99-23 8-5 2-1c1-2 2-9-1-12l-81-81c-4-4-10-3-12-1l-2 2a10 10 0 00-4 8zm180-340l-48 24a73 73 0 00-32 33l-25 48a10 10 0 01-16 0l-23-47a73 73 0 00-33-33l-47-23a10 10 0 010-17l47-23a73 73 0 0033-33l23-47a10 10 0 0116 0l25 48a73 73 0 0033 33l46 23a10 10 0 010 17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6m637fhvct0";
freezeTemplate(tmpl);
