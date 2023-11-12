import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tour.css";

import _implicitScopedStylesheets from "./tour.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M499 371a90 90 0 01-90 90H143a75 75 0 002-15 74 74 0 00-2-15h266a60 60 0 000-120H110a90 90 0 010-180h203a148 148 0 0010 30H110a60 60 0 000 120h299a89 89 0 0136 7 87 87 0 0132 24 90 90 0 0122 59zM425 29a75 75 0 00-76 76c0 52 54 100 71 113a8 8 0 0010 0c16-13 70-61 70-113a75 75 0 00-75-76zm0 107a32 32 0 1131-31 32 32 0 01-31 31z"${3}/><circle cx="65" cy="446" r="45"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5bpkgauv6dd";
freezeTemplate(tmpl);
