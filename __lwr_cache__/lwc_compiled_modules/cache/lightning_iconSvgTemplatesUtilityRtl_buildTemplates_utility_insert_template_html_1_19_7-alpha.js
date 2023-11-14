import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./insert_template.css";

import _implicitScopedStylesheets from "./insert_template.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20 395v30c0 8 7 15 15 15h45v45c0 8 7 15 15 15h30c8 0 15-7 15-15v-45h45c8 0 15-7 15-15v-30c0-8-7-15-15-15h-45v-45c0-8-7-15-15-15H95c-8 0-15 7-15 15v45H35c-8 0-15 7-15 15zm160-55h45c8 0 15 7 15 15v25h220a40 40 0 0040-40V60a40 40 0 00-40-40H180a40 40 0 00-40 40v220h25c8 0 15 7 15 15zM360 90c0-6 4-10 10-10h60c6 0 10 4 10 10v20c0 6-4 10-10 10h-60c-6 0-10-4-10-10zM240 250c0-6 4-10 10-10h180c6 0 10 4 10 10v20c0 6-4 10-10 10H250c-6 0-10-4-10-10zm-40-80c0-6 4-10 10-10h220c6 0 10 4 10 10v20c0 6-4 10-10 10H210c-6 0-10-4-10-10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7sv5v7cmr61";
freezeTemplate(tmpl);
