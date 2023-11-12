import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./resource_territory.css";

import _implicitScopedStylesheets from "./resource_territory.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M267 290c20-29 41-43 55-65 25-37 30-90 14-130-16-41-54-65-98-64s-80 28-94 69c-16 45-9 99 27 133 15 14 29 36 21 57-7 20-31 29-48 37-39 17-86 41-94 87-8 38 18 77 59 77h180c8 0 15-9 10-15-25-29-51-67-51-105-2-27 6-57 19-81zm110 104c-21 0-39-17-39-38s17-38 39-38c21 0 39 17 39 38s-18 38-39 38zm0-130a92 92 0 00-92 92c0 63 66 122 86 137 3 3 8 3 12 0 20-16 86-74 86-137a92 92 0 00-92-92z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-77vbmu10ng5";
freezeTemplate(tmpl);
