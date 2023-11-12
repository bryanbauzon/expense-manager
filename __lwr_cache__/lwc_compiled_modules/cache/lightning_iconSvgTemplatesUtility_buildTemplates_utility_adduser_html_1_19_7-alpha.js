import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./adduser.css";

import _implicitScopedStylesheets from "./adduser.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M219 370c0-27 9-58 23-82 17-30 36-42 51-64 25-37 30-90 14-130-16-41-54-65-98-64s-80 28-94 69c-16 45-9 99 27 133 15 14 29 36 21 57-7 20-31 29-48 37-39 17-86 41-94 87-8 38 18 77 59 77h170c8 0 13-10 8-16a160 160 0 01-39-104zm160-120c-66 0-120 54-120 120s54 120 120 120 120-54 120-120-54-120-120-120zm61 130c0 6-5 10-11 10h-29v30c0 6-5 10-11 10h-20c-6 0-9-4-9-10v-30h-31c-6 0-9-4-9-10v-20c0-6 3-10 9-10h31v-30c0-6 3-10 9-10h20c6 0 11 4 11 10v30h29c6 0 11 4 11 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1jc18ukofbq";
freezeTemplate(tmpl);
