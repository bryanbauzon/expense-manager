import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./touch_action.css";

import _implicitScopedStylesheets from "./touch_action.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M378 298l-82-28c-6-2-11-8-11-15V146a30 30 0 00-31-30h-3a31 31 0 00-31 30v215c0 18-23 26-33 10l-21-44a37 37 0 00-54-11l-13 10 69 163c3 7 10 11 18 11h181c9 0 16-6 18-14l32-114c8-32-10-63-39-74zm-206-68v-86a80 80 0 0176-76h8a80 80 0 0176 76v86c0 7 9 10 14 6 22-23 35-54 35-87a128 128 0 10-222 87c4 4 13 1 13-6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3dgijilh0bq";
freezeTemplate(tmpl);
