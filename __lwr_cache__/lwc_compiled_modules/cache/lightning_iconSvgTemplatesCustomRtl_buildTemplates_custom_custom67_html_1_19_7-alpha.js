import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom67.css";

import _implicitScopedStylesheets from "./custom67.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M540 531l-12-21c-5-8-13-13-22-13l-9 2-35 13c-14-12-29-20-46-26l-6-36c-2-12-13-19-25-19h-25c-12 0-23 7-25 20l-6 35c-17 6-32 15-46 27l-35-13-9-2c-9 0-18 5-22 13l-12 21c-6 11-4 24 6 32l29 24a122 122 0 000 53l-29 24c-10 8-12 22-6 32l12 21c5 8 13 13 22 13l9-2 35-13c14 12 29 21 46 26l6 37c2 12 13 21 25 21h25c12 0 23-9 25-21l6-37c18-6 34-16 48-28l33 13 9 2c9 0 17-5 22-12l12-20c6-11 4-25-6-33l-29-24a122 122 0 000-53l29-24c9-8 12-22 6-32zM372 683a68 68 0 110-136 68 68 0 010 136zm420-293l-23-19 2-21-2-21 23-19c8-6 10-17 5-26l-10-17c-4-6-11-10-18-10l-7 1-29 11a98 98 0 00-37-21l-5-30c-2-10-10-16-20-16h-20c-10 0-19 6-20 16l-5 29c-14 5-26 12-37 22l-29-13-7-1c-7 0-14 4-18 10l-10 17c-5 9-3 20 5 26l23 19-2 21 2 21-23 19c-8 6-10 17-5 26l10 17c4 6 11 10 18 10l7-1 29-11c11 10 24 17 37 21l5 29c2 10 10 17 20 17h20c10 0 19-7 20-17l5-30c14-5 28-13 39-23l27 11 7 1c7 0 14-4 18-10l10-16c5-4 3-15-5-22zm-131 16c-30 0-55-25-55-55s25-55 55-55 55 25 55 55-24 55-55 55z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4913faj2cud";
freezeTemplate(tmpl);
