import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom39.css";

import _implicitScopedStylesheets from "./new_custom39.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M369 89c-2-6-9-10-15-9L31 184c-8 2-12 11-10 19l13 50c2 8 10 14 18 12l82-11c2 9 6 18 12 25L76 468c-5 12 1 26 14 30l8 2c10 0 19-6 22-16l66-179c6 2 10 2 16 2l16-2 66 179c3 10 13 16 22 16l8-2c13-5 19-18 14-31l-70-190c9-12 14-27 14-43v-1l113-16c7-1 12-8 10-15zm130 113L455 38c-3-13-17-21-30-18s-21 17-18 30l44 163c3 13 17 21 30 18s21-17 18-29z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4196e50jja5";
freezeTemplate(tmpl);
