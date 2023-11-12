import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom97.css";

import _implicitScopedStylesheets from "./new_custom97.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M342 293V103c0-47-36-83-82-83h-1c-46 0-82 37-82 83v190a120 120 0 0083 207c66 0 120-54 120-120 0-34-13-64-38-87zm-19 87H197c-7 0-12-7-11-14 3-18 13-34 27-45 5-5 9-11 9-18V103c0-22 16-38 37-38h1c21 0 37 17 37 38v7h-22c-13 0-22 10-22 22s10 22 22 22h22v30h-22c-13 0-22 10-22 22s10 22 22 22h22v30h-22c-13 0-22 10-22 22s10 22 22 22h22c1 7 4 12 9 17 14 11 24 28 27 45 2 9-3 16-10 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6vi2epmu7qa";
freezeTemplate(tmpl);
