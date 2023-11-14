import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./notification_off.css";

import _implicitScopedStylesheets from "./notification_off.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M478 67c6-7 6-16 0-23l-20-20c-6-5-16-5-22 0l-60 60c-30-29-70-47-116-45-83 4-146 75-146 159v106c0 19-15 33-34 33h-4a40 40 0 00-39 40v13c0 6 7 13 15 13h4l-30 30c-5 6-5 16 0 22l20 20c7 6 17 6 23 0l340-341 69-69zm-23 270h4c22 0 39 17 39 38v15c0 7-7 14-15 14H202l219-220v119c0 19 16 34 34 34zM315 442h-95a10 10 0 00-10 12c6 26 30 46 57 46s52-20 57-46a10 10 0 00-10-12z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7jbo0hfic8p";
freezeTemplate(tmpl);
