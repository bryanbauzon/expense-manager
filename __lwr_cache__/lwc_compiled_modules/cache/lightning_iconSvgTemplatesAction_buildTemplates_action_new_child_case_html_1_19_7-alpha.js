import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_child_case.css";

import _implicitScopedStylesheets from "./new_child_case.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M150 110h40c6 0 10-4 10-10V80h100v20c0 6 4 10 10 10h40c6 0 10-4 10-10V75c0-30-25-55-55-55H194c-30 0-54 24-54 54v26c0 6 4 10 10 10zm170 230h20v-20c0-22 18-40 40-40h60c13 0 24 6 31 15 3 4 9 1 9-3V190c0-22-18-40-40-40H60c-22 0-40 18-40 40v230c0 22 18 40 40 40h218c4 0 6-3 5-7-2-4-3-8-3-13v-60c0-22 18-40 40-40zm165 40h-45v-45c0-8-7-15-15-15h-30c-8 0-15 7-15 15v45h-45c-8 0-15 7-15 15v30c0 8 7 15 15 15h45v45c0 8 7 15 15 15h30c8 0 15-7 15-15v-45h45c8 0 15-7 15-15v-30c0-8-7-15-15-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6dbpu13o0sh";
freezeTemplate(tmpl);
