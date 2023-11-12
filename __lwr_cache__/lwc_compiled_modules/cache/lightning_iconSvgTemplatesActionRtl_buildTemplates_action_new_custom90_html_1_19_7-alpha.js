import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom90.css";

import _implicitScopedStylesheets from "./new_custom90.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M479 69L284 97v275c0 5-3 8-8 8h-32c-5 0-8-3-8-8V105L48 133h-3c-12 0-22-9-24-21-2-13 7-26 19-27l149-22a79 79 0 01126-19l157-22c13-2 26 7 27 20 2 12-6 24-20 27zM191 363c6-7 7-16 3-25l-64-151c-3-9-12-14-22-14s-18 5-22 14L22 339c-3 7-2 15 2 22 2 2 33 50 83 50 29 0 58-16 84-48zm-83-105l34 82H74zm326-119c-4-9-13-14-22-14-10 0-18 6-22 14l-64 152c-3 7-2 15 2 22 2 2 33 50 83 50 30 0 58-16 84-48 6-7 7-16 3-25zm-22 71l34 82h-69zM260 428c-45 0-90 16-122 43-3 3-6 7-6 12v1c0 9 7 16 16 16h224c9 0 16-7 16-16v-1c0-5-2-9-6-12-32-27-77-43-122-43z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-f64vdsk0q0";
freezeTemplate(tmpl);
