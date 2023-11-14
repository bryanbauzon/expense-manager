import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./relationship.css";

import _implicitScopedStylesheets from "./relationship.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M713 700h-38v-75h38c7 0 12-5 12-12V288c0-8-5-13-12-13H388c-8 0-13 5-13 13v37h-75v-37c0-49 39-88 88-88h325c48 0 87 39 87 88v325c0 48-39 87-87 87zM575 375H250c-27 0-50 22-50 50v325c0 28 23 50 50 50h325c28 0 50-22 50-50V425c0-27-22-50-50-50z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3jkcd6nocs8";
freezeTemplate(tmpl);
