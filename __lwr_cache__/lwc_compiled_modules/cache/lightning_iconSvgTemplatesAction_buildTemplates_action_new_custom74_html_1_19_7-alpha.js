import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom74.css";

import _implicitScopedStylesheets from "./new_custom74.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M301 444h-82c-9 0-16 7-16 16v24c0 9 7 16 16 16h82c9 0 16-7 16-16v-24c0-9-7-16-16-16zM260 20C160 20 80 95 80 188c0 60 34 113 85 142 20 11 33 30 37 52 2 7 8 13 16 13h85c8 0 15-6 16-13 4-22 17-41 37-52 50-30 83-82 83-142 1-93-79-168-179-168zm-56 75c-16 30-25 66-26 95 0 30 6 58 16 86 3 7-4 14-11 10-75-38-70-176 11-203 7-1 14 6 10 12zm63 191c-2 6-12 6-15 0-13-31-16-68-17-102 1-34 4-70 17-102 2-6 12-6 15 0 13 31 16 68 17 102 0 34-4 70-17 102zm67 1c-7 3-14-3-11-10 11-29 16-61 17-91-1-26-10-61-26-90-3-6 3-14 10-11 81 26 86 165 10 202z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7qtov40dpqe";
freezeTemplate(tmpl);
