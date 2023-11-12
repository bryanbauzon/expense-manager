import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom70.css";

import _implicitScopedStylesheets from "./custom70.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M479 638L364 525a62 62 0 00-86 0l-72 71c-8 8-8 21 0 28l14 14 14 14 116 114 7 7 22 21c8 8 21 8 29 0l72-71c23-23 23-61-1-85zm-187-42l15-14c8-8 20-8 28 0l87 85c8 8 8 21 0 28l-15 14c-8 8-20 8-28 0l-87-85c-8-8-8-21 0-28zm125-104l93 91c2 2 4 3 7 3l43-1c5 0 9-4 9-9l1-37c0-5 4-9 9-9l38-1c5 0 9-4 9-9l1-37c0-5 4-9 9-9l38-1c5 0 9-4 9-9l1-37c0-5 4-9 9-9l38-1c5 0 9-4 9-9l1-38c0-5 4-8 8-9l41-6c7-1 11-9 7-15l-88-130c-7-10-21-11-30-3L416 467c-6 6-6 18 1 25z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5ta0ph3euub";
freezeTemplate(tmpl);
