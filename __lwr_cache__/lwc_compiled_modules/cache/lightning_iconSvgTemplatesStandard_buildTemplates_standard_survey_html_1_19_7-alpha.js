import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./survey.css";

import _implicitScopedStylesheets from "./survey.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M240 230h440c22 0 40 18 40 40v40c0 22-18 40-40 40H240c-22 0-40-18-40-40v-40c0-22 18-40 40-40zm0 180h250c22 0 40 18 40 40v40c0 22-18 40-40 40H240c-22 0-40-18-40-40v-40c0-22 18-40 40-40zm419 110c77 0 140 63 140 140s-63 140-140 140-140-63-140-140 63-140 140-140zm79 109c3-3 3-10 0-13l-14-13c-4-4-10-4-14 0l-75 84-34-34c-4-4-10-4-14 0l-14 13c-4 3-4 9 0 13l48 47c4 4 9 6 14 6 6 0 10-2 14-6zm-498-39h232a198 198 0 00-6 120H240c-22 0-40-18-40-40v-40c0-22 18-40 40-40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7r7tk1dsn0s";
freezeTemplate(tmpl);
