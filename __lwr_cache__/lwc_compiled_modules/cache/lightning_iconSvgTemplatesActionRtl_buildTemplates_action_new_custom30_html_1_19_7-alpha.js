import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom30.css";

import _implicitScopedStylesheets from "./new_custom30.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M432 88c-44-44-103-68-164-68-14 0-24 10-24 24s10 24 24 24c49 0 95 19 131 54 34 35 54 82 54 131 0 14 10 24 24 24s24-10 24-24c-1-62-25-121-69-165zm-164 28c-14 0-24 10-24 24s10 24 24 24a89 89 0 0189 89c0 14 10 24 24 24s24-10 24-24c0-36-14-71-40-96-27-26-61-41-97-41zm-35 230l21-56c14 6 30 2 42-9 16-16 16-41 0-57s-41-16-57 0a42 42 0 00-8 45l-52 23-94-94c-6-6-18-6-23 1C2 271 6 379 74 446c67 67 175 71 247 12 7-6 7-17 1-23z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5q76aljeeja";
freezeTemplate(tmpl);
