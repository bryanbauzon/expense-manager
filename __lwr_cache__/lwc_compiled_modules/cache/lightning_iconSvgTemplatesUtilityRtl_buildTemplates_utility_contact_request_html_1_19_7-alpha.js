import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contact_request.css";

import _implicitScopedStylesheets from "./contact_request.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 40C128 40 22 138 22 258c0 38 11 74 29 106 3 5 4 11 2 17l-31 85c-3 8 5 15 13 13l87-33c5-2 11-1 17 2a250 250 0 00319-63c26-36 42-79 42-125-1-123-108-220-240-220zm130 216L281 363c-5 5-12 4-17 0l-17-17c-5-5-4-12 0-17l44-44c4-4 1-13-6-13h-12c-49-1-92 30-110 73-2 3-7 6-11 1l-22-22c-4-4-5-10-3-11 27-52 82-89 139-89l21-1c7 0 10-9 6-13l-44-45c-4-4-3-12 1-17l17-17c5-5 12-4 17 0l106 109c5 5 5 12 0 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2gbpaipsfgm";
freezeTemplate(tmpl);
