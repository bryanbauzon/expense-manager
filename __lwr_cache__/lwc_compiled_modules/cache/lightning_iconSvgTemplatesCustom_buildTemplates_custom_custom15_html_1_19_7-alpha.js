import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom15.css";

import _implicitScopedStylesheets from "./custom15.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M700 461c-35-15-40-28-40-42 0-15 10-28 22-39 21-19 32-45 32-75 0-56-35-105-98-105-54 0-87 36-96 82-1 4 1 8 4 10 45 32 73 86 73 151 0 45-15 86-43 117-4 5-3 13 4 16 17 7 37 17 57 28 6 4 13 6 20 6h115c28 0 50-22 50-49v-8c0-45-49-70-100-92zM521 626c-42-17-48-33-48-50s12-33 26-46c24-22 38-52 38-88 0-66-42-123-116-123s-116 57-116 123c0 36 13 66 38 88 14 12 26 29 26 46s-6 32-48 50c-61 25-119 54-120 107v9c0 32 27 58 60 58h319c33 0 60-26 60-58v-9c0-53-58-82-119-107z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-774bjhsb18s";
freezeTemplate(tmpl);
