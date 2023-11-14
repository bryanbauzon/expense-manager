import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./key_dates.css";

import _implicitScopedStylesheets from "./key_dates.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M779 416a21 21 0 0121 20v323a64 64 0 01-62 64H264a65 65 0 01-64-62V437a22 22 0 0120-21h559zm-287 62v1l-29 92a7 7 0 01-7 6h-93a10 10 0 00-6 17h1l74 55a10 10 0 013 9v1l-34 94a9 9 0 0013 11h1l81-60a10 10 0 0110-1l1 1 80 60a9 9 0 0014-10v-1l-36-94a9 9 0 012-9l1-1 74-55a10 10 0 00-4-17h-93a9 9 0 01-8-5v-1l-28-91a9 9 0 00-17-2zm147-298a43 43 0 0143 43v21h54a64 64 0 0164 65v21a21 21 0 01-21 21H221a21 21 0 01-21-21v-21a64 64 0 0164-65h54v-21a43 43 0 1186 0v21h192v-21a43 43 0 0143-43z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5nq5u87dlij";
freezeTemplate(tmpl);
