import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./transport_bicycle.css";

import _implicitScopedStylesheets from "./transport_bicycle.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M325 24a41 41 0 00-29 70 41 41 0 1059-57 40 40 0 00-30-13zm-60 86a18 18 0 00-12 5L153 215a18 18 0 00-3 6 18 18 0 00-1 8 17 17 0 003 8 18 18 0 005 5l85 49v124a19 19 0 001 7 18 18 0 004 6 20 20 0 006 4 18 18 0 0013 0 17 17 0 006-4 18 18 0 004-6 17 17 0 001-7V281a18 18 0 00-2-9 17 17 0 00-7-6l-53-30 67-67 37 37a17 17 0 0012 5h74a19 19 0 007-1 17 17 0 006-4 18 18 0 004-6 18 18 0 002-6 19 19 0 00-2-7 17 17 0 00-4-6 18 18 0 00-5-4 19 19 0 00-7-1h-68l-60-60a18 18 0 00-6-4 18 18 0 00-6-2zM115 298a96 96 0 00-67 164 96 96 0 00136 0 96 96 0 000-136 97 97 0 00-68-28zm288 0a96 96 0 00-68 164 96 96 0 10136-136 97 97 0 00-68-28z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7hjkbqger15";
freezeTemplate(tmpl);
