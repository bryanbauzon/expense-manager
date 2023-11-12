import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./people.css";

import _implicitScopedStylesheets from "./people.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M420 223c-28-11-32-22-32-33s8-22 18-30a74 74 0 0026-58c0-44-29-82-80-82a76 76 0 00-79 71c0 4 2 7 5 9 38 24 61 66 61 117 0 38-15 72-42 96-2 2-2 6 0 8 7 5 23 12 33 17l8 2h121c23 0 41-19 41-40v-6c0-35-38-54-80-71zM286 362c-34-14-39-26-39-39s10-26 21-36c20-17 31-41 31-69 0-52-34-97-96-97-61 0-96 45-96 97 0 28 11 52 31 69 11 10 21 23 21 36s-5 26-40 39c-50 20-99 43-99 85v13a40 40 0 0041 40h277c23 0 42-18 42-40v-14c0-41-44-64-94-84z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3e0ahj3k5tg";
freezeTemplate(tmpl);
