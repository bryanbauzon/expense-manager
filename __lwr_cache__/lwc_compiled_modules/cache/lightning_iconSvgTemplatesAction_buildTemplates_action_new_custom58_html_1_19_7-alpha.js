import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom58.css";

import _implicitScopedStylesheets from "./new_custom58.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M395 228c-14 0-25-11-24-26 1-13 12-22 26-22h69c3 0 6-2 7-4 6-11 11-22 15-33 2-6-2-11-7-11h-51c-13 0-25-10-26-22-1-14 10-26 24-26h64c5 0 8-3 8-8V52c0-9-7-16-16-16h-85c-24 0-43 19-43 43v1c0 45-30 85-72 96v-66c17-10 27-28 24-49s-21-38-42-40a48.4 48.4 0 00-30 90v67a99 99 0 01-72-96v-2c0-24-19-43-43-43H36c-9 0-16 7-16 16v24c0 5 3 8 8 8h62c13 0 25 10 26 22 1 14-10 26-24 26H40c-6 0-10 6-7 11 4 10 9 22 15 33 2 2 4 4 7 4h69c13 0 25 10 26 22 1 14-10 26-24 26h-19c-7 0-11 10-5 14 34 29 78 49 136 49v182c0 13 10 25 22 26 14 1 26-10 26-24V292c58 0 102-21 136-49 6-5 2-14-5-14h-22z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7hba7quao4p";
freezeTemplate(tmpl);
