import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_notebook.css";

import _implicitScopedStylesheets from "./new_notebook.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M440 20H140c-22 0-40 18-40 40v30H70c-17 0-30 13-30 30s13 30 30 30h30v80H70c-17 0-30 13-30 30s13 30 30 30h30v80H70c-17 0-30 13-30 30s13 30 30 30h30v30c0 22 18 40 40 40h300c22 0 40-18 40-40V60c0-22-18-40-40-40zm-70 340c0 6-4 10-10 10H220c-6 0-10-4-10-10v-20c0-6 4-10 10-10h140c6 0 10 4 10 10v20zm20-80c0 6-4 10-10 10H200c-6 0-10-4-10-10v-20c0-6 4-10 10-10h180c6 0 10 4 10 10v20zm20-100c0 6-4 10-10 10H180c-6 0-10-4-10-10v-60c0-6 4-10 10-10h220c6 0 10 4 10 10v60z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-14rtsodgohb";
freezeTemplate(tmpl);
