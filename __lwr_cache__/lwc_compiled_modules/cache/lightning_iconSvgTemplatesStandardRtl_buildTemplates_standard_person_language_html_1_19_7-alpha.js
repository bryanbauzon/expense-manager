import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./person_language.css";

import _implicitScopedStylesheets from "./person_language.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M390 696a16 16 0 00-3-2 8 8 0 00-9 0 88 88 0 01-47 14 86 86 0 01-47-14 8 8 0 00-8 0 16 16 0 01-4 2c-35 15-72 34-72 66v12a26 26 0 0026 26h208a26 26 0 0026-26v-12c0-32-36-51-70-66zm-60-13c36 0 65-32 65-72s-29-72-65-72-65 32-65 72 30 72 65 72zm321-257h28l-15-33zm-41-226c-104 0-190 81-190 181a175 175 0 0025 89 15 15 0 011 10l-18 58a13 13 0 0017 16l55-20a14 14 0 0110 1 195 195 0 00100 27c105 0 190-81 190-181s-85-181-190-181zm-36 197c-12 14-27 29-44 46a6 6 0 01-9 0l-8-8a6 6 0 010-9l45-48c-12-15-21-29-25-35a6 6 0 01-1-5 6 6 0 013-4l10-6a6 6 0 018 2l20 29a283 283 0 0028-41H499a6 6 0 01-6-6v-12a6 6 0 016-6h65v-13a6 6 0 016-6h12a6 6 0 016 6v13h65a6 6 0 016 6v12a6 6 0 01-6 6h-25a257 257 0 01-39 61 170 170 0 0026 24 6 6 0 011 8l-7 10a6 6 0 01-4 3h-1a6 6 0 01-3-1 193 193 0 01-27-26zm152 90a3 3 0 01-2 0h-18a6 6 0 01-5-4l-14-33h-45l-12 33a6 6 0 01-6 5h-17a4 4 0 01-3-4 6 6 0 010-1l46-125a6 6 0 016-4h16a5 5 0 015 4l50 125a4 4 0 01-1 5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-9s7l8phj77";
freezeTemplate(tmpl);
