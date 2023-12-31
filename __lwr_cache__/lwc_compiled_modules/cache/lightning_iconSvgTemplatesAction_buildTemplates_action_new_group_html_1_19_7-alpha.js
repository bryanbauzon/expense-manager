import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_group.css";

import _implicitScopedStylesheets from "./new_group.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M158 280c-14-21-21-45-21-72 0-46 19-84 49-107a62 62 0 00-56-31c-44 0-69 36-69 77 0 22 7 41 22 54 8 8 15 18 15 28s-4 20-29 31c-36 16-69 38-70 71 1 22 15 39 36 39h33c5 0 10-3 13-8 16-29 46-47 71-60 9-4 11-15 6-22zm292-20c-25-11-29-20-29-31s7-21 15-28c15-14 22-32 22-54 0-41-24-77-69-77-26 0-46 13-57 31 30 23 49 61 49 107 0 27-7 51-21 72-5 8-2 18 6 22 25 12 55 31 71 60 3 5 8 8 13 8h33c21 0 35-17 35-39 1-33-32-55-68-71zm-124 73c-27-12-32-23-32-34 0-12 8-23 17-31 16-15 25-36 25-60 0-45-27-84-76-84s-76 39-76 84c0 24 9 45 25 60 9 9 17 20 17 31 0 12-4 22-32 34-40 17-78 36-79 72 0 24 18 44 41 44h208c23 0 41-20 41-44-1-36-39-54-79-72z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7fca73clf86";
freezeTemplate(tmpl);
