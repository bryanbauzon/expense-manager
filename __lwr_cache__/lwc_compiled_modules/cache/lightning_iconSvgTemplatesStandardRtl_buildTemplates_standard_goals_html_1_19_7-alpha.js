import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./goals.css";

import _implicitScopedStylesheets from "./goals.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M660 260c0 18 8 34 20 45v455c0 22 18 40 40 40s40-18 40-40V305a60 60 0 00-40-105c-33 0-60 27-60 60zm-460 57v272c0 7 4 13 10 17 155 84 242-50 384-7 13 4 26-6 26-19V322c0-8-5-16-13-19-148-54-235 87-392 5-7-4-15 1-15 9zm60 71c19 4 38 2 58 2h2v60c21 0 41 0 60-4v-59c21-4 40-8 60-14v60l8-2 52-16v-60c11-2 21-4 35-4l25 2v60l-25-2c-14 0-25 2-35 4v57a349 349 0 0160 0v60l-25-2-35 2v-60c-21 3-38 9-60 16v59l-19 6-41 11v-60c-20 4-40 7-60 7v60h-2c-22 0-40-2-58-8v-59c19 5 38 6 58 6h2v-60h-2c-20 0-39 0-58-5zm120 59v57c16-3 31-8 47-12l13-4v-55z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5bc23cl4ht0";
freezeTemplate(tmpl);
