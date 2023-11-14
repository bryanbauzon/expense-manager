import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./maintenance_plan.css";

import _implicitScopedStylesheets from "./maintenance_plan.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M657 340h79c9 0 17-8 17-17 0-4-2-9-5-12L635 200c-3-3-7-5-11-5-9 0-17 8-17 17v79c2 27 23 48 50 49zm70 70H605c-40 0-72-32-73-72V218c1-12-8-22-20-23H316c-40 0-72 32-73 72v457c0 40 33 72 73 72h362c40 0 72-32 73-72V435c1-13-10-25-24-25zm-69 308c-8 8-18 12-30 12-11 0-22-4-30-12L460 580a106 106 0 01-141-130c1-4 6-5 10-2l60 60c4 5 12 5 16 1l1-1 42-42c5-4 5-12 1-16l-1-1-60-60c-2-2-2-6 0-9l2-1c10-2 21-4 31-4 59 0 106 47 107 106l-1 12c-1 10-4 19-7 28l138 139c16 16 16 42 0 58z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-28b3ttd81nt";
freezeTemplate(tmpl);
