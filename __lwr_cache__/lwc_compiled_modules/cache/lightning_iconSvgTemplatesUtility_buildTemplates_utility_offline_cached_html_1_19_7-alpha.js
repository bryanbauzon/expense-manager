import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./offline_cached.css";

import _implicitScopedStylesheets from "./offline_cached.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M386 204c-10-65-67-115-135-115-76 0-137 61-137 137 0 3 0 7 1 10-50 4-89 46-89 96 0 54 43 97 97 97h115l-81-81c-4-4-4-9 0-13l13-13c4-4 9-4 13 0l35 35c4 4 11 1 11-4V218c0-4 5-9 10-9h19c5 0 9 4 9 9v134c0 6 8 8 11 4l35-35c4-4 9-4 13 0l13 13c4 4 4 9 0 13l-79 82h123c61-1 110-51 110-113 1-61-47-110-107-112z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1n4agcf555b";
freezeTemplate(tmpl);
