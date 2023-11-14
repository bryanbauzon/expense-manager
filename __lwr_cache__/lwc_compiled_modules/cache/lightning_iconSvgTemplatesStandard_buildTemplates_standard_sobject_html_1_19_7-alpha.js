import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sobject.css";

import _implicitScopedStylesheets from "./sobject.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M251 226h51a399 399 0 000 368h-51c-69-154-69-214 0-368zm220 229c5 23 8 41 11 49 4 11 10 20 18 27a109 109 0 01114-13c2-3 3-7 3-11 0-12-10-22-22-22l-10 2s-24 14-32 3c-6-11-11-26-15-45l-11-54 24-35s27 10 41 10 42-11 42-48-27-39-35-39c-16 0-32 12-46 36l-30 52h-1l-8-38c-3-15-21-48-57-48-37 0-70 21-70 21-6 4-10 11-10 19 0 12 10 22 22 22l10-2s28-16 34 0l5 15c7 24 14 52 19 78l-24 35s-27-10-41-10-42 11-42 48 27 39 35 39c16 0 32-12 46-36 14-28 30-55 30-55zm249 80l2 1 11-1c13 0 25 2 36 6 46-118 39-181-22-316h-51c52 115 59 204 24 310zm-103 46a57 57 0 0189 11c8-3 18-6 28-6 37 0 68 31 68 67 0 37-31 67-68 67l-13-1c-8 15-25 25-43 25-8 0-15-2-22-5-9 20-29 34-52 34-25 0-45-15-53-36l-11 1c-29 0-53-23-53-52 0-19 10-36 26-45-3-7-5-15-5-24 0-33 28-60 61-60 19 0 37 9 48 24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5uknbrtshp8";
freezeTemplate(tmpl);
