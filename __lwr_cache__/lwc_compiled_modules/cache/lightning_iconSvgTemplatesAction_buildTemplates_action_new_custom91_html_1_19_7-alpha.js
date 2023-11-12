import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom91.css";

import _implicitScopedStylesheets from "./new_custom91.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M483 121c-24-7-45-24-59-46-10-17-11-55-37-55H133c-26 0-26 38-37 55-17 26-38 33-64 48s-2 79 4 102c25 89 72 171 146 230 21 17 43 31 67 43 22 11 58-20 74-32 42-30 76-67 103-110 23-37 41-77 54-118 5-17 10-34 13-51 3-14 10-37 6-51-2-7-9-13-16-15-37-11 11 3 0 0zm-35 56a400 400 0 01-175 266l-13 7-13-8A389 389 0 0172 176l-2-16 14-9c25-15 48-42 62-70l6-14h216l4 10c14 30 38 59 68 76l10 6v1zm-196-61c-18 0-63 0-72 8-15 14-24 34-40 47-17 14-9 29-3 48a357 357 0 0083 138c4 4 41 41 41 18V132c-1-9-1-16-9-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-29j8lvnft2d";
freezeTemplate(tmpl);
