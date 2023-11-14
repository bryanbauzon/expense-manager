import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./flow.css";

import _implicitScopedStylesheets from "./flow.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M799 307c-26-51-92-146-215-90l-119 55-110 48c-31 15-99-6-137-20-11-4-21 8-16 19 26 51 92 146 215 90 76-35 229-101 229-101 31-15 99 6 137 20 11 2 21-9 16-21zM535 468c-14 8-69 33-69 33l-55 24c-27 15-86-5-121-19-10-5-19 8-14 18 22 50 81 140 189 85 67-34 124-56 124-56 27-15 86 5 121 19 10 4 19-8 14-19-23-50-82-140-189-85zm-40 221l-30 18c-21 13-65-4-91-17-7-4-14 8-10 18 16 45 60 126 141 76l30-18c22-11 65 4 91 16 7 4 14-8 10-18-16-44-57-121-141-75z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-238p4lp3qsb";
freezeTemplate(tmpl);
