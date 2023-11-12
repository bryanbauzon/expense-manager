import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./follow.css";

import _implicitScopedStylesheets from "./follow.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20 395v30c0 8 7 15 15 15h45v45c0 8 7 15 15 15h30c8 0 15-7 15-15v-45h45c8 0 15-7 15-15v-30c0-8-7-15-15-15h-45v-45c0-8-7-15-15-15H95c-8 0-15 7-15 15v45H35c-8 0-15 7-15 15zm220-15v64c-1 9 6 16 15 16h225c22 0 40-18 40-40V60c0-22-18-40-40-40H120c-22 0-40 18-40 40v205c0 8 7 15 15 15h45c22 0 40 18 40 40v10c0 6 4 10 10 10h10c22 0 40 18 40 40zm40-250c0 6-4 10-10 10H170c-6 0-10-4-10-10v-20c0-6 4-10 10-10h100c6 0 10 4 10 10zm0 80c0 6-4 10-10 10H170c-6 0-10-4-10-10v-20c0-6 4-10 10-10h100c6 0 10 4 10 10zm160 0c0 6-4 10-10 10H330c-6 0-10-4-10-10V110c0-6 4-10 10-10h100c6 0 10 4 10 10zM280 350c0-6 4-10 10-10h140c6 0 10 4 10 10v20c0 6-4 10-10 10H290c-6 0-10-4-10-10zm-50-50c-6 0-10-4-10-10v-20c0-6 4-10 10-10h200c6 0 10 4 10 10v20c0 6-4 10-10 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4o4lren7c6u";
freezeTemplate(tmpl);
