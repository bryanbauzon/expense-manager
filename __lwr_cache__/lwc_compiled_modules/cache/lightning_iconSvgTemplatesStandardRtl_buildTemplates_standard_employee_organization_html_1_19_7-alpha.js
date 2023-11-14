import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./employee_organization.css";

import _implicitScopedStylesheets from "./employee_organization.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M636 603h-8a164 164 0 00-161 139c0 7 2 24 27 24h272c25 0 27-15 27-24a157 157 0 00-157-139zm-150-20c4-4 1-7 1-7a179 179 0 01-31-100 172 172 0 0132-102 1 1 0 011-1 18 18 0 004-11V254a22 22 0 00-20-20H225a22 22 0 00-20 21v462h195a241 241 0 0186-134zm-170 77a22 22 0 01-21 21h-21a22 22 0 01-21-21v-21a22 22 0 0121-21h21a22 22 0 0121 21zm0-105a22 22 0 01-21 21h-21a22 22 0 01-21-21v-21a22 22 0 0121-21h21a22 22 0 0121 21zm0-105a22 22 0 01-21 21h-21a22 22 0 01-21-21v-21a22 22 0 0121-21h21a22 22 0 0121 21zm0-105a22 22 0 01-21 21h-21a22 22 0 01-21-21v-21a22 22 0 0121-21h21a22 22 0 0121 21zm119 210a22 22 0 01-21 21h-21a22 22 0 01-21-21v-21a22 22 0 0121-21h21a22 22 0 0121 21zm0-105a22 22 0 01-21 21h-21a22 22 0 01-21-21v-21a22 22 0 0121-21h21a22 22 0 0121 21zm0-105a22 22 0 01-21 21h-21a22 22 0 01-21-21v-21a22 22 0 0121-21h21a22 22 0 0121 21z"${3}/><circle cx="633" cy="476" r="107"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5gvvs9p5k0h";
freezeTemplate(tmpl);
