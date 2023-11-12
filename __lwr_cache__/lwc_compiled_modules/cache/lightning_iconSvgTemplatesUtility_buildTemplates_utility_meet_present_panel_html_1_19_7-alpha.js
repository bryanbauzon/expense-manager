import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./meet_present_panel.css";

import _implicitScopedStylesheets from "./meet_present_panel.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M315 40H102a42 42 0 00-40 40H48a27 27 0 00-27 26 26 26 0 0027 25h13v54H48a26 26 0 10-4 52 16 16 0 004 0h13v53H48a27 27 0 00-27 26 26 26 0 0027 27h12a37 37 0 0034 40 34 34 0 007 0h159v-13a135 135 0 0196-130V79a40 40 0 00-40-39zm-85 257a14 14 0 01-14 13h-79a14 14 0 01-14-13v-13a14 14 0 0114-13h79a14 14 0 0114 12v14zm52-80c0 8-8 13-19 13H140c-10 0-18-5-18-13v-12c0-8 8-13 18-13h124c10 0 18 6 18 13zm31-79a14 14 0 01-16 13H137a14 14 0 01-15-13v-13a14 14 0 0115-13h160a14 14 0 0116 13zm186 184a13 13 0 00-13-13H380a13 13 0 00-9 4 13 13 0 00-4 7v15a13 13 0 0013 13h55l-98 100a13 13 0 000 19l10 9a13 13 0 0010 4 12 12 0 007-3l98-101v55a13 13 0 003 10 12 12 0 0010 3h13a12 12 0 0010-3 14 14 0 003-7v-2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4ajo8mjcfl7";
freezeTemplate(tmpl);
