import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom54.css";

import _implicitScopedStylesheets from "./custom54.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M272 491c65-12 122-38 184-67l75-35c6-3 10-9 8-16-5-29-29-53-59-53h-20v-38c0-11-10-21-20-21v-41c0-11-9-21-20-21h-40c-11 0-20 9-20 21v41c-10 0-20 9-20 21v38h-20c-33 0-60 31-60 65v96c0 6 6 11 12 10zm448 201s73-114 80-275c0-12-9-22-21-22-238 9-349 155-560 164-11 0-19 10-19 20v76c0 33 25 59 56 61 105 7 330 22 459 43 13 2 25-10 23-23-3-15-8-33-18-44zm-10-182c-17 0-30-13-30-30s13-30 30-30 30 13 30 30-13 30-30 30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-10nhveucr48";
freezeTemplate(tmpl);
