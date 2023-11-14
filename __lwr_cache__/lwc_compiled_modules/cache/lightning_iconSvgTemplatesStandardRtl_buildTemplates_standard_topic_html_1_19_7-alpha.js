import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./topic.css";

import _implicitScopedStylesheets from "./topic.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M614 372c2 7 7 12 14 14l22 6c4 1 9-1 11-5l47-81c11-19 5-26-15-15l-81 47c-4 2-6 7-5 11zm-275 15c2 4 7 6 11 5l22-6c7-2 12-7 14-14l6-22c1-4-1-9-5-11l-81-47c-19-11-26-5-15 15zm322 226c-2-4-7-6-11-5l-22 6c-7 2-12 7-14 14l-6 22c-1 4 1 9 5 11l81 47c19 11 26 5 15-15zm-275 15c-2-7-7-12-14-14l-22-6c-4-1-9 1-11 5l-47 81c-11 19-5 26 15 15l81-47c4-2 6-7 5-11zm398-138l-205-55c-7-2-12-7-14-14l-55-205c-6-21-15-21-21 0l-55 205c-2 7-7 12-14 14l-204 55c-21 6-21 15 0 21l205 55c7 2 12 7 14 14l55 204c6 21 15 21 21 0l55-205c2-7 7-12 14-14l204-55c21-5 21-15 0-20zm-284 60c-28 0-50-22-50-50s22-50 50-50 50 22 50 50-22 50-50 50z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-40qo9gmeomm";
freezeTemplate(tmpl);
