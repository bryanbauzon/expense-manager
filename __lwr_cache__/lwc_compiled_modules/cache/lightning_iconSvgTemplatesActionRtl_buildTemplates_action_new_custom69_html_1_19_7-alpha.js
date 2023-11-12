import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom69.css";

import _implicitScopedStylesheets from "./new_custom69.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M281 221c-46-34-92-18-122 11-11 10-29 17-48 22-22 7-46 14-62 31-46 45-37 98 25 160l1 1 1 1c37 36 70 54 101 54 22 0 42-9 62-27 17-16 25-39 32-61 6-18 13-37 23-47 18-18 29-38 31-59 2-15-2-37-19-59 0-2-10-15-25-27zm-99 193c-4 4-10 6-16 6s-11-2-15-6l-45-44c-9-9-9-22 0-31s22-9 31 0l44 44c9 9 9 22 1 31zm38-65c-22 0-40-18-40-40s18-40 40-40 40 18 40 40-18 40-40 40zM495 62l-37-37c-6-6-18-6-25 0l-41 41c-6 6-6 18 0 25l2 2-82 83c-3 3-3 9 0 12l23 22c3 3 8 3 11 0l82-82 2 2c6 6 18 6 25 0l41-41c6-9 6-20-1-27z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-10d7ioc7mlf";
freezeTemplate(tmpl);
