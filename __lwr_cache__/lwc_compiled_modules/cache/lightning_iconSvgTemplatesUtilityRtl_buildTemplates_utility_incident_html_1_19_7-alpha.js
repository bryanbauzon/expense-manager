import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./incident.css";

import _implicitScopedStylesheets from "./incident.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M164 100h32a8 8 0 008-8V68h112v24a8 8 0 008 8h32a8 8 0 008-8V68a48 48 0 00-48-48H204a48 48 0 00-48 48v24a8 8 0 008 8zm96 267a18 18 0 1018 17 18 18 0 00-18-17zm192-219H68a48 48 0 00-48 48v256a48 48 0 0048 48h384a48 48 0 0048-48V196a48 48 0 00-48-48zm-55 302H123c-15 0-23-19-15-33l137-221a17 17 0 0130 0l137 221a21 21 0 01-15 33z"${3}/><rect width="36" height="90" x="242" y="265" rx="6"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2dk3q73knan";
freezeTemplate(tmpl);
