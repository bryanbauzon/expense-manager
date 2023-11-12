import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./insert_tag_field.css";

import _implicitScopedStylesheets from "./insert_tag_field.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M163 122l-23-19c-7-5-15-4-21 2L3 251c-4 5-4 13 0 19l117 145c5 6 14 8 21 2l23-19c7-5 8-15 2-21L72 260l95-117c4-6 3-15-4-21zm354 129L400 106c-5-6-14-8-21-2l-23 19c-7 5-8 15-2 21l95 117-95 117c-5 6-4 16 2 21l23 19c7 5 15 4 21-2l117-146c4-7 4-14 0-19zM316 108l-30-7c-8-2-17 3-19 11l-74 284c-2 8 3 16 11 18l30 7c8 2 17-3 19-11l74-284c2-9-3-16-11-18z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-160hpf5qpfn";
freezeTemplate(tmpl);
