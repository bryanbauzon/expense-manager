import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quote.css";

import _implicitScopedStylesheets from "./quote.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M350 230H170c-6 0-10 4-10 10v30c0 6 4 10 10 10h180c6 0 10-4 10-10v-30c0-6-4-10-10-10zm-20 90H190c-6 0-10 4-10 10v30c0 6 4 10 10 10h140c6 0 10-4 10-10v-30c0-6-4-10-10-10zm128-197l-96-92c-8-7-18-11-28-11H186c-10 0-20 4-28 11l-96 92c-8 8-12 18-12 29v308c0 22 18 40 40 40h340c22 0 40-18 40-40V152c0-11-4-21-12-29zM260 50c22 0 40 18 40 40s-18 40-40 40-40-18-40-40 18-40 40-40zm150 375c0 8-7 15-15 15H125c-8 0-15-7-15-15V175c0-8 7-15 15-15h270c8 0 15 7 15 15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1bimi2slm4v";
freezeTemplate(tmpl);
