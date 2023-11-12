import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./delete.css";

import _implicitScopedStylesheets from "./delete.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M455 100H330V60c0-22-18-40-40-40h-60c-22 0-40 18-40 40v40H65c-8 0-15 7-15 15v30c0 8 7 15 15 15h390c8 0 15-7 15-15v-30c0-8-7-15-15-15zM230 70c0-6 4-10 10-10h40c6 0 10 4 10 10v30h-60zm185 130H105c-8 0-15 7-15 15v235c0 28 22 50 50 50h240c28 0 50-22 50-50V215c0-8-7-15-15-15zM230 420c0 6-4 10-10 10h-20c-6 0-10-4-10-10V280c0-6 4-10 10-10h20c6 0 10 4 10 10zm100 0c0 6-4 10-10 10h-20c-6 0-10-4-10-10V280c0-6 4-10 10-10h20c6 0 10 4 10 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-36ho0k6n8m";
freezeTemplate(tmpl);
