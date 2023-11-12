import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./edit.css";

import _implicitScopedStylesheets from "./edit.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M488 74l-42-42a39 39 0 00-56 0l-33 33c-4 4-4 10 0 14l85 85c4 4 10 4 14 0l33-33c15-16 15-41-1-57zm-159 33c-4-4-10-4-14 0L54 368 21 481c-3 11 7 22 18 19l114-32h-1l261-261c4-4 4-10 0-14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2tbi4rvuk78";
freezeTemplate(tmpl);
