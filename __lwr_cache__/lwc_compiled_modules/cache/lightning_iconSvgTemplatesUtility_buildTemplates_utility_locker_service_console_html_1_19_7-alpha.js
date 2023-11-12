import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./locker_service_console.css";

import _implicitScopedStylesheets from "./locker_service_console.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M477 91c-9-22-20-42-33-61-6-8-17-9-23-2a108 108 0 01-74 28c-30 0-57-12-77-32-6-6-16-6-22 0a110 110 0 01-151 4c-7-6-18-5-23 2a297 297 0 00-33 61s-24 49-20 130v8l1 12v1a285 285 0 00238 258 286 286 0 00238-259v-3l1-8c7-86-22-139-22-139zm-68 103L243 363c-4 4-9 4-13 0l-97-98c-4-4-4-9 0-13l13-13c4-4 9-4 13 0l73 74c2 2 6 2 9 0l143-144c4-4 9-4 13 0l13 13c3 3 3 9-1 12z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4udvhmhobe2";
freezeTemplate(tmpl);
