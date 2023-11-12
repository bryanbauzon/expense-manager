import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_person_account.css";

import _implicitScopedStylesheets from "./new_person_account.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M417 332c-29-12-34-23-34-35s8-23 18-32c17-15 26-37 26-62 0-46-30-87-82-87s-82 40-82 87c0 26 10 46 26 62 10 9 18 20 18 32s-5 23-34 35c-43 18-83 40-84 78 0 25 19 50 43 50h224c25 0 43-25 43-50 2-37-39-60-82-78zm-183-61c-3-4-19-24-18-78 1-53 24-66 24-66V75c0-9-9-15-15-15H35c-7 0-15 7-15 16v349h108c3-89 105-125 105-125 15-8 4-25 1-29zM106 381c0 9-7 16-16 16H74c-9 0-16-7-16-16v-16c0-9 7-16 16-16h16c9 0 16 7 16 16zm0-79c0 9-7 16-16 16H74c-9 0-16-7-16-16v-16c0-9 7-16 16-16h16c9 0 16 7 16 16zm0-80c0 9-7 16-16 16H74c-9 0-16-7-16-16v-16c0-9 7-16 16-16h16c9 0 16 7 16 16zm0-79c0 9-7 16-16 16H74c-9 0-16-7-16-16v-16c0-9 7-16 16-16h16c9 0 16 7 16 16zm90 159c0 9-7 16-16 16h-16c-9 0-16-7-16-16v-16c0-9 7-16 16-16h16c9 0 16 7 16 16zm0-80c0 9-7 16-16 16h-16c-9 0-16-7-16-16v-16c0-9 7-16 16-16h16c9 0 16 7 16 16zm0-79c0 9-7 16-16 16h-16c-9 0-16-7-16-16v-16c0-9 7-16 16-16h16c9 0 16 7 16 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3l3cush2vdq";
freezeTemplate(tmpl);
