import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom34.css";

import _implicitScopedStylesheets from "./new_custom34.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M196 100h128c9 0 16-9 14-18-8-35-40-62-78-62s-70 27-78 62c-2 9 5 18 14 18zm280 208c14 0 25-11 24-26-1-12-12-22-26-22h-70v-40c46-18 79-68 80-127 0-12-8-22-20-25-15-2-28 9-28 24 0 34-16 64-39 78-9-14-24-22-41-22H164c-17 0-32 9-41 22a89 89 0 01-39-77c0-13-10-25-22-26-14-1-26 10-26 24 0 59 34 110 80 128v40H46c-13 0-25 10-26 22-1 14 10 26 24 26h72v40c-46 18-79 68-80 127 0 12 8 22 20 25 15 2 28-9 28-24 0-34 15-63 38-78 14 45 49 80 93 94 10 3 21-5 21-15V286c0-13 10-25 22-26 14-1 26 10 26 24v193c0 11 10 18 21 15 44-14 79-50 93-94 22 14 38 43 38 76 0 13 10 25 22 26 14 1 26-10 26-24 0-59-34-110-80-128v-40h72z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1bqsuh7pk0a";
freezeTemplate(tmpl);
