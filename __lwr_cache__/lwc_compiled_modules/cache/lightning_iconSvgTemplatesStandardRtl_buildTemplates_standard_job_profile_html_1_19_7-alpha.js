import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./job_profile.css";

import _implicitScopedStylesheets from "./job_profile.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M373 319h218a20 20 0 0020-20v-40a60 60 0 00-59-59H413a60 60 0 00-59 59v40c-1 11 8 20 19 20zm327-70h-20c-6 0-10 4-10 10v40a80 80 0 01-79 79H373a80 80 0 01-79-79v-40c0-6-4-10-10-10h-20a60 60 0 00-59 59v406a60 60 0 0059 59h200c28 0 31-23 31-31V528c0-23 13-28 20-28h216c24 0 28-21 28-28V310a59 59 0 00-59-61zm84 355H566c-6 0-11-5-11-11v-22c0-6 5-11 11-11h218c6 0 11 5 11 11v22c0 6-5 11-11 11zm0 98H566c-6 0-11-5-11-11v-22c0-6 5-11 11-11h218c6 0 11 5 11 11v22c0 6-5 11-11 11zm0 98H566c-6 0-11-5-11-11v-22c0-6 5-11 11-11h218c6 0 11 5 11 11v22c0 6-5 11-11 11z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ts2k3qobiu";
freezeTemplate(tmpl);
