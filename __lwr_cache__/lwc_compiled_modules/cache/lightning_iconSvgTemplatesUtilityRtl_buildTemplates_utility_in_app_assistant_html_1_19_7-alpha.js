import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./in_app_assistant.css";

import _implicitScopedStylesheets from "./in_app_assistant.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M499 336l-20-42 20-42c2-3 0-8-3-9l-3-1h-65c-5-13-18-45-30-63a235 235 0 00-52-60 295 295 0 00-79-47l-7-1-7 2a211 211 0 00-75 42 261 261 0 00-72 90l-16 38H27l-3 1c-3 1-5 6-4 9l18 42-18 42v2c0 4 3 7 7 7h45v18l1 20v13l12 7c1 0 20 11 51 22 28 10 73 22 127 22a360 360 0 00173-44l10-5 2-8 1-7v-21l-1-8-1-10h46c4 0 7-3 7-7l-1-2zm-85 36l-1 6-27 13a330 330 0 01-124 24 357 357 0 01-156-37v-21l1-26a304 304 0 0130-111 226 226 0 01102-104l20-9a244 244 0 0164 39c17 14 32 31 45 53 10 16 24 50 28 60 0 0 13 42 14 70l2 31 1 5v7zm-156 8c-6 0-10-2-14-5-4-4-6-9-6-15s2-11 6-14c4-4 9-6 15-6s11 2 14 6a20 20 0 010 29c-5 4-10 5-15 5zm-67-148c0-9 3-17 8-26 6-9 14-16 24-22 11-6 23-9 37-9 13 0 25 2 35 7s18 11 23 20c5 8 8 17 8 27 0 8-2 14-5 20s-7 11-11 15l-23 21-7 7-4 6-2 5-2 9c-2 9-7 14-16 14-5 0-9-2-12-5-3-1-4-6-4-12 0-8 1-14 4-20 2-6 5-10 9-15l16-15 13-11 7-9c2-3 3-7 3-10 0-7-3-13-8-18s-12-7-21-7c-10 0-17 3-22 8s-9 12-12 22-9 15-18 15c-5 0-9-2-13-5-5-4-7-8-7-12z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1ml1hu1les9";
freezeTemplate(tmpl);
