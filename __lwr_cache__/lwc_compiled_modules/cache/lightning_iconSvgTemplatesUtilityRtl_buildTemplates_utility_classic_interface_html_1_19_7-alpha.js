import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./classic_interface.css";

import _implicitScopedStylesheets from "./classic_interface.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M255 357v-85l-62 96c-24 39-21 70-21 70 0 31 23 57 51 57 17 0 32-9 41-24 9 13 23 20 39 20 28 0 51-25 51-57l-1-9c0-42-92-155-92-155v87l12 29 1 4c0 7-6 13-13 13s-13-6-13-13l1-4zm-96-74l80-30s-66-16-112-25-73 5-73 5c-29 11-45 41-36 67a50 50 0 0037 31 50 50 0 00-6 44c10 26 41 39 71 28l8-4c40-14 113-140 113-140l-78 29-3 1-23 21-3 2c-7 3-15-1-17-8-3-7 1-15 8-17l4-1zm40-119l51 69-8-114c-4-46-25-69-25-69-19-25-52-32-74-15a50 50 0 00-19 44 50 50 0 00-44 6c-22 17-25 51-7 76l6 7c25 34 167 69 167 69l-50-67-2-2-27-16-3-3c-4-6-3-14 3-19 6-4 14-3 19 3l2 3zm162 119l-80-30s66-16 112-25 73 5 73 5c29 11 45 41 36 67a50 50 0 01-37 31 50 50 0 016 44c-10 26-41 39-71 28l-8-4c-40-14-113-140-113-140l78 29 3 1 23 21 3 2c7 3 15-1 17-8 3-7-1-15-8-17l-4-1zm-44-119l-51 69 8-114c4-46 25-69 25-69 19-25 52-32 74-15a50 50 0 0119 44 50 50 0 0143 7c22 17 25 51 7 76l-6 7c-24 33-166 67-166 67l50-67 2-2 27-16 3-3c4-6 3-14-3-19-6-4-14-3-19 3l-2 3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-69nue1t7u26";
freezeTemplate(tmpl);
