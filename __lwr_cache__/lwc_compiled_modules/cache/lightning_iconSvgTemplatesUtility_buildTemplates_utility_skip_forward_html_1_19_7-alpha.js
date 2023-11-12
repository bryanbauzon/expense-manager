import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./skip_forward.css";

import _implicitScopedStylesheets from "./skip_forward.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 79V26c0-5 6-8 11-5l103 85c4 3 4 9 0 12l-103 84c-4 4-11 0-11-4v-54a145.5 145.5 0 100 291 146 146 0 00131-211l-1-2-6-12c-3-5-6-13 0-18l33-27c2-1 9-8 16 2l13 22 1 2 4 7a210 210 0 01-190 301 210 210 0 11-1-420z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-71tjsk89ecr";
freezeTemplate(tmpl);
