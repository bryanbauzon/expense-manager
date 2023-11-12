import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom77.css";

import _implicitScopedStylesheets from "./custom77.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M320 420h40c6 0 10-4 10-10v-15c0-76 57-135 130-135s130 59 130 135v15c0 6 4 10 10 10h40c6 0 10-4 10-10v-15c0-109-83-195-190-195s-190 86-190 195v15c0 6 4 10 10 10zm380 60H310c-33 0-60 27-60 60v200c0 33 27 60 60 60h390c33 0 60-27 60-60V540c0-33-27-60-60-60zM553 641c-9 14-14 30-10 46l7 30c2 11-6 23-18 23h-64c-12 0-20-12-18-23l7-31c4-16-1-32-10-45s-13-29-10-45c5-24 25-43 50-48 41-8 76 22 76 59 0 13-4 24-10 34z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-15qc1nar076";
freezeTemplate(tmpl);
