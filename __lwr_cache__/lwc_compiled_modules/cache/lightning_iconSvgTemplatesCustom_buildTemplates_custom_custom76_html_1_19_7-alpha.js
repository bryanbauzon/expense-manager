import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom76.css";

import _implicitScopedStylesheets from "./custom76.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M529 553c-3-8-11-14-20-13h-9c-110 0-200-90-200-200v-5c0-10-13-14-18-6a142 142 0 00106 215l7 19c1 3 3 5 5 6l30 13c5 2 7 8 5 13l-10 29c-2 5 1 10 5 12l16 7c5 2 7 8 5 13l-9 31c-1 5 1 10 5 12l23 10c5 2 7 8 5 13l-8 31c-1 5 1 10 6 12l68 31c5 2 11 0 13-5l30-67c2-5 2-10 1-15zm265-10L635 377c7-25 7-52-3-81-19-53-68-92-125-95-86-4-156 69-147 156a140 140 0 00185 116l14 15c2 2 4 3 7 3h34c6 0 10 4 10 10l3 31c0 5 5 9 10 9h17c6 0 10 4 10 10l5 32c1 5 5 8 10 8h25c6 0 10 4 10 10l5 32c1 5 5 8 10 8h75c6 0 10-4 10-10v-73c0-7-2-12-6-15zM480 370c-28 0-50-22-50-50s22-50 50-50 50 22 50 50c0 27-22 50-50 50z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4r6ohnfta8e";
freezeTemplate(tmpl);
