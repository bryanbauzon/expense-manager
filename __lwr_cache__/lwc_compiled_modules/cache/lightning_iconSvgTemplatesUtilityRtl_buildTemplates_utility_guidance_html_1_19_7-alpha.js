import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./guidance.css";

import _implicitScopedStylesheets from "./guidance.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 20C128 20 20 128 20 260s108 240 240 240 240-108 240-240S392 20 260 20zm0 416c-97 0-176-80-176-176S164 84 260 84s176 80 176 176-80 176-176 176zm93-279l-133 48c-7 2-13 8-15 15l-48 133a8 8 0 0010 10l133-48c7-2 13-8 15-15l48-133a8 8 0 00-10-10zm-93 135c-18 0-32-14-32-32s14-32 32-32 32 14 32 32-14 32-32 32z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3540ai2286b";
freezeTemplate(tmpl);
