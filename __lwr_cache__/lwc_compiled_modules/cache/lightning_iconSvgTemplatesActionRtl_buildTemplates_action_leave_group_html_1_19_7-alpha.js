import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./leave_group.css";

import _implicitScopedStylesheets from "./leave_group.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M303 221c-20-9-24-17-24-26s6-17 12-24c12-11 18-27 18-46 1-35-19-65-56-65-22 0-37 11-47 27 25 19 40 52 40 90 0 22-6 43-17 61-4 6-2 15 5 19 21 11 45 25 59 49 2 4 6 5 11 5h27c17 0 29-12 29-31-1-29-28-46-57-59zm-106 60c-23-10-26-19-26-29s6-20 14-27c13-13 20-31 20-52 0-39-23-73-63-73h-4c-40 0-63 34-63 73 0 21 7 39 20 52 8 7 14 17 14 27s-3 19-26 29c-33 15-64 30-65 61 2 22 17 38 36 38h174c19 0 34-16 34-37-1-32-33-47-65-62zm123 144v-30c0-8 7-15 15-15h150c8 0 15 7 15 15v30c0 8-7 15-15 15H335c-8 0-15-7-15-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-a43n9315h7";
freezeTemplate(tmpl);
