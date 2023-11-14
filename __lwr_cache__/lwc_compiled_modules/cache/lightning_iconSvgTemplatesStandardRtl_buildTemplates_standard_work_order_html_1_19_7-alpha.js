import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_order.css";

import _implicitScopedStylesheets from "./work_order.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M652 522a97 97 0 00-52 53c-3 7-8 8-8 8H412c-3 0-6-4-8-7-15-35-50-61-90-61-37 0-69 20-86 50-2 4-8 5-12 2-10-9-16-22-16-36 0 0-6-116 33-176 7-10 12-14 21-14h380c4 0 8 0 12 3 0 0 42 64 48 70 5 5 10 9 23 12l81 28c4 2 3 7 3 11v65c0 14-4 27-14 36-4 3-9 2-11-2a97 97 0 00-124-42"${3}/><circle cx="690" cy="611" r="49"${3}/><circle cx="315" cy="611" r="49"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3hrcb88j7li";
freezeTemplate(tmpl);
