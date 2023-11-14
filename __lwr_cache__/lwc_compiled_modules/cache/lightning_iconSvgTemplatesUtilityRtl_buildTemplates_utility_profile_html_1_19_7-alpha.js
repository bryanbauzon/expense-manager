import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./profile.css";

import _implicitScopedStylesheets from "./profile.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M271 27a19 19 0 00-22 0C164 91 85 151 85 267a169 169 0 0047 123l7 7a179 179 0 00106 42l-18 31s-20 27 27 27h12c47 0 26-27 26-27l-17-31a179 179 0 00106-42c35-31 54-76 54-129 0-117-79-177-164-241zm101 324a97 97 0 01-10 11 108 108 0 00-202-5 102 102 0 01-15-17 150 150 0 01-19-108c12-67 61-110 134-166 86 65 137 114 137 201a137 137 0 01-25 84z"${3}/><circle cx="260" cy="207" r="62"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-37u1f5rl0ra";
freezeTemplate(tmpl);
