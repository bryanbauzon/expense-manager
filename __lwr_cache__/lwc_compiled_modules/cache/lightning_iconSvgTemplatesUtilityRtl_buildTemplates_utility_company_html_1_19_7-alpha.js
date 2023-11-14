import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./company.css";

import _implicitScopedStylesheets from "./company.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M210 40H70a30 30 0 00-30 30v400c0 5 5 10 10 10h40c6 0 10-4 10-10v-60c0-6 4-10 10-10h60c6 0 10 4 10 10v60c0 6 4 10 10 10h30a20 20 0 0020-20V70a30 30 0 00-30-30zm-90 315c0 3-2 5-5 5H85c-3 0-5-2-5-5v-50c0-3 2-5 5-5h30c3 0 5 2 5 5zm0-100c0 3-2 5-5 5H85c-3 0-5-2-5-5v-50c0-3 2-5 5-5h30c3 0 5 2 5 5zm0-100c0 3-2 5-5 5H85c-3 0-5-2-5-5v-50c0-3 2-5 5-5h30c3 0 5 2 5 5zm80 200c0 3-2 5-5 5h-30c-3 0-5-2-5-5v-50c0-3 2-5 5-5h30c3 0 5 2 5 5zm0-100c0 3-2 5-5 5h-30c-3 0-5-2-5-5v-50c0-3 2-5 5-5h30c3 0 5 2 5 5zm0-100c0 3-2 5-5 5h-30c-3 0-5-2-5-5v-50c0-3 2-5 5-5h30c3 0 5 2 5 5zm250-15H310a30 30 0 00-30 30v300c0 5 5 10 10 10h40c6 0 10-4 10-10v-60c0-6 4-10 10-10h60c6 0 10 4 10 10v60c0 6 4 10 10 10h30a20 20 0 0020-20V170a30 30 0 00-30-30zm-90 215c0 3-2 5-5 5h-30c-3 0-5-2-5-5v-50c0-3 2-5 5-5h30c3 0 5 2 5 5zm0-100c0 3-2 5-5 5h-30c-3 0-5-2-5-5v-50c0-3 2-5 5-5h30c3 0 5 2 5 5zm80 100c0 3-2 5-5 5h-30c-3 0-5-2-5-5v-50c0-3 2-5 5-5h30c3 0 5 2 5 5zm0-100c0 3-2 5-5 5h-30c-3 0-5-2-5-5v-50c0-3 2-5 5-5h30c3 0 5 2 5 5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5ur0v6u3i57";
freezeTemplate(tmpl);
