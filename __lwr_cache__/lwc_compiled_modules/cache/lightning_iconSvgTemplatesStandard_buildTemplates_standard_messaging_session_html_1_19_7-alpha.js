import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./messaging_session.css";

import _implicitScopedStylesheets from "./messaging_session.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 220c166 0 300 125 301 280 0 155-134 280-300 280-58 0-112-15-158-42-5-3-11-4-17-2l-88 31c-16 5-31-9-26-25l28-89c2-5 1-11-2-16-24-41-38-87-38-137 0-155 134-280 300-280zm130 230c6 0 10-4 10-10v-60c0-6-4-10-10-10H370c-6 0-10 4-10 10v60c0 6 4 10 10 10zM430 650c6 0 10-4 10-10V520c0-6-4-10-10-10h-60c-6 0-10 4-10 10v120c0 6 4 10 10 10zm200 0c6 0 10-4 10-10V520c0-6-4-10-10-10H510c-6 0-10 4-10 10v120c0 6 4 10 10 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2t9aac44hsb";
freezeTemplate(tmpl);
