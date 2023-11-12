import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./remove_relationship.css";

import _implicitScopedStylesheets from "./remove_relationship.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M360 200c0-22-18-40-40-40H60c-22 0-40 18-40 40v260c0 22 18 40 40 40h260c22 0 40-18 40-40zM110 350c-5 0-10-5-10-10v-20c0-5 5-10 10-10h160c5 0 10 5 10 10v20c0 5-5 10-10 10zm320 70h-30v-60h30c6 0 10-4 10-10V90c0-6-4-10-10-10H170c-6 0-10 4-10 10v30h-60V90c0-39 31-70 70-70h260c39 0 70 31 70 70v260c0 39-31 70-70 70z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-193a8l26idn";
freezeTemplate(tmpl);
