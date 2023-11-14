import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./text.css";

import _implicitScopedStylesheets from "./text.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M799 779c-3-41-4-83-4-124l1-62c0-19 2-38-5-56-16-41-70-49-109-49a247 247 0 00-100 23l13 32c3 6 4 13 5 19 26-12 52-19 78-19 41 0 61 16 61 48v15l-29-1c-52 0-91 8-119 23-27 16-41 43-41 82 0 29 9 52 27 68s41 24 68 24c24 0 44-3 59-10s28-17 38-31h2l5 34h50zm-59-101c0 7-1 14-4 21-2 5-4 10-8 15a84 84 0 01-53 30c-13 2-25 1-38-1-10-2-20-7-25-16-9-14-7-36 3-49 6-8 15-13 24-16 25-8 54-8 79-8l22 1zM549 563L407 211c-2-7-8-11-15-11h-45c-7 0-14 5-16 11L201 563c-3 7 2 15 9 15h50c7 0 14-6 16-13l33-92h128l37 92c2 7 9 13 16 13h49c8 0 14-8 10-15zM335 404l37-96 41 96z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-q67i9a86lt";
freezeTemplate(tmpl);
