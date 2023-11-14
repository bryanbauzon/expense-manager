import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./user_role.css";

import _implicitScopedStylesheets from "./user_role.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M440 633c0-34 11-72 29-102 21-37 45-52 64-80 31-46 37-112 17-162-20-51-67-81-122-80s-100 35-117 86c-20 56-11 124 34 166 19 17 36 45 26 71-9 25-39 36-60 46-49 21-107 51-117 109-10 47 22 96 74 96h212c10 0 16-12 10-20-32-36-50-82-50-130zm200-150a150 150 0 100 300 150 150 0 000-300zm26 164l-12-2-57 57c-4 4-9 5-12 5-5 0-9-1-12-5-6-6-6-17 0-25l57-57-2-12c-2-26 19-50 45-50l12 2c2 0 2 2 1 4l-26 25c-2 1-2 5 0 6l17 17c2 2 5 2 7 0l25-25c1-1 4-1 4 1l2 12c1 28-21 49-49 47z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4ofb00g7120";
freezeTemplate(tmpl);
