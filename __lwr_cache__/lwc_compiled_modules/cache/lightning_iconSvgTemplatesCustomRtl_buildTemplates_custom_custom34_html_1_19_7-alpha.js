import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom34.css";

import _implicitScopedStylesheets from "./custom34.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M420 300h160c11 0 20-11 18-22-10-45-50-78-98-78s-88 34-98 78c-2 11 7 22 18 22zm350 260c17 0 31-14 30-32-1-16-15-28-32-28h-88v-50c58-23 99-85 100-159 0-15-10-28-25-31-19-3-35 11-35 30 0 43-20 80-49 98a61 61 0 00-51-28H380c-21 0-40 11-51 28-29-18-49-54-49-96 0-16-12-31-28-32-18-1-32 13-32 30 0 74 42 137 100 160v50h-88c-16 0-31 12-32 28-1 17 13 32 30 32h90v50c-58 23-99 85-100 159 0 15 10 28 25 31 19 3 35-11 35-30 0-42 19-79 48-97 17 56 61 100 116 118 13 4 26-6 26-19V532c0-16 12-31 28-32 17-1 32 13 32 30v242c0 14 13 23 26 19 55-18 99-62 116-118 28 18 47 54 48 95 0 16 12 31 28 32 18 1 32-13 32-30 0-74-42-137-100-160v-50h90z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5n43pjehh0t";
freezeTemplate(tmpl);
