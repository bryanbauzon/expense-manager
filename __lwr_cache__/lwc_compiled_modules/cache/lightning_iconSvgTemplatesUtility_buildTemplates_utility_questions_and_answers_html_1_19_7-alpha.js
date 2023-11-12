import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./questions_and_answers.css";

import _implicitScopedStylesheets from "./questions_and_answers.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 280c0-39-25-73-60-85a180.2 180.2 0 00-360 0 90 90 0 007 172c22 77 91 133 173 133s151-56 173-133c38-10 67-45 67-87zm-100-90l-1-1 4 1h-3zM260 460c-77 0-140-65-140-144 0-20 4-50 12-68 1-3 3-6 4-9 30-12 56-33 73-60 35 44 90 74 151 74 21 0 27 1 29 0 4 13 8 29 9 45-6 25-45 49-100 52-2-5-8-10-14-10h-50c-8 0-14 8-14 16v30c0 8 6 14 14 14h50c7 0 12-3 14-9 36-1 68-11 93-26-19 55-70 95-131 95z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2iroe932hba";
freezeTemplate(tmpl);
