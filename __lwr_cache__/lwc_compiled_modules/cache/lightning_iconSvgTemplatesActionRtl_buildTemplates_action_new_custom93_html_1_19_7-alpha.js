import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom93.css";

import _implicitScopedStylesheets from "./new_custom93.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M201 260h239c7 0 14-5 15-12l44-149c3-10-5-20-15-20H115l-6-22c-4-10-14-17-24-17H46c-13 0-25 9-26 22s11 25 24 25h23l76 250a24 24 0 0023 17h282c13 0 25-9 26-22s-11-25-24-25H202c-11 0-20-7-23-16v-1c-5-15 7-30 22-30z"${3}/><ellipse cx="206" cy="441" rx="40" ry="39"${3}/><ellipse cx="401" cy="441" rx="40" ry="39"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-bu634a4am5";
freezeTemplate(tmpl);
