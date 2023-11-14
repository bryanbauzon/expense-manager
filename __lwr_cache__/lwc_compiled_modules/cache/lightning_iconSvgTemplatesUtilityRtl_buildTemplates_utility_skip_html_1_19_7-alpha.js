import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./skip.css";

import _implicitScopedStylesheets from "./skip.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M395 323v7c0 10 7 10 13 4l49-49c5-6 15-6 21 0l21 21c6 5 6 15 0 21L370 456c-5 5-13 5-18 0L222 326c-5-6-5-13 1-19l22-22c6-6 15-7 21-1l49 49c7 7 13 9 17 1l1-11v-73c0-71-57-128-128-128S77 178 77 249v133c0 8-7 14-15 14H30c-8 0-14-5-14-13V249a189 189 0 11378 0l1 74z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3bvrk00d9ek";
freezeTemplate(tmpl);
