import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./update.css";

import _implicitScopedStylesheets from "./update.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 20a239 239 0 100 480 239 239 0 100-480zm90 155c0 8-7 15-15 15h-95c-6 0-10 4-10 10v20c0 6 4 10 10 10h40c39 0 70 31 70 70v20c0 39-31 70-70 70h10v20c0 11-9 20-20 20s-20-9-20-20v-20h-65c-8 0-15-7-15-15v-30c0-8 7-15 15-15h95c6 0 10-4 10-10v-20c0-6-4-10-10-10h-40c-39 0-70-31-70-70v-20c0-39 31-70 70-70h10v-20c0-11 9-20 20-20s20 9 20 20v20h45c8 0 15 7 15 15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-26iu0nqhgia";
freezeTemplate(tmpl);
