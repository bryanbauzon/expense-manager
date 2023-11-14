import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./visits.css";

import _implicitScopedStylesheets from "./visits.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M506 529c26-37 53-56 71-84 32-48 39-116 18-168-21-53-70-84-127-83s-103 36-121 89c-21 58-12 128 35 172 19 18 37 47 27 74-9 26-40 37-62 48-50 22-111 53-121 112-10 49 23 100 76 100h233c10 0 19-12 13-19-32-37-66-87-66-136-3-35 7-74 24-105zm142 135c-27 0-50-22-50-49s22-49 50-49c27 0 50 22 50 49 1 27-23 49-50 49zm0-168c-66 0-119 53-119 119 0 81 85 158 111 177 4 4 10 4 16 0 26-21 111-96 111-177 0-66-53-119-119-119z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-s4kk3jo2tl";
freezeTemplate(tmpl);
