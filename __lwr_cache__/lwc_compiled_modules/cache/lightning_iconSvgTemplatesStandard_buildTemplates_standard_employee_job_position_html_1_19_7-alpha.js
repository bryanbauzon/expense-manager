import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./employee_job_position.css";

import _implicitScopedStylesheets from "./employee_job_position.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M653 515a143 143 0 10142 143 143 143 0 00-142-143zm25 155a31 31 0 01-11-2l-54 54a17 17 0 01-11 5c-5 0-9-1-11-5a18 18 0 010-24l54-54a45 45 0 0140-58 31 31 0 0111 2c2 0 2 2 1 4l-25 24a4 4 0 000 6l16 16a5 5 0 007 0l24-24c1-1 5-1 5 1a65 65 0 012 11 45 45 0 01-48 44zM489 797c27 0 12-19 12-19a196 196 0 01-25-201l2-4a12 12 0 00-9-19 185 185 0 00-24-1 245 245 0 00-242 210c0 12 4 35 42 35h239a18 18 0 015-1z"${3}/><circle cx="446" cy="361" r="161"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5gmbfqlgb18";
freezeTemplate(tmpl);
