import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./offline_briefcase.css";

import _implicitScopedStylesheets from "./offline_briefcase.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M452 149H68a48 48 0 00-48 47v256a49 49 0 0048 48h384a49 49 0 0048-48V196a48 48 0 00-48-47zM174 298l14-14a10 10 0 0114 0l24 24a6 6 0 009 0 6 6 0 002-5v-87a10 10 0 0110-10h23a10 10 0 0110 10v87a7 7 0 0011 5l24-24a10 10 0 0114 0l14 14a10 10 0 010 14l-78 76a10 10 0 01-14 0l-77-76a10 10 0 010-14zm178 140a10 10 0 01-10 10H178a10 10 0 01-10-10v-21a10 10 0 0110-10h164a10 10 0 0110 10zM157 100h32a7 7 0 008-7V68h127v24a7 7 0 007 8h33a7 7 0 008-7V68a49 49 0 00-48-48H197a48 48 0 00-48 48v24a7 7 0 007 8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2nedihp90ad";
freezeTemplate(tmpl);
