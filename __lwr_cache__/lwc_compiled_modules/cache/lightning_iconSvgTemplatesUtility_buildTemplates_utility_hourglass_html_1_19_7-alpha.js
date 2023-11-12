import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./hourglass.css";

import _implicitScopedStylesheets from "./hourglass.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M89 20c-9 0-16 7-16 16v24c0 10 7 16 17 16h20v60c0 8 3 16 8 21l74 85c3 3 4 6 4 10v26c0 12-53 63-76 85a32 32 0 00-10 23v58H89c-9 0-16 7-16 16v25c0 8 7 15 16 15h341c9 0 16-7 16-15v-25c0-9-7-16-16-16h-20v-58a30 30 0 00-10-24 384 384 0 01-77-84v-26c0-3 1-7 4-10l75-85a31 31 0 008-20V76h22c9 0 16-7 16-16V36c-1-9-8-16-18-16H90zm75 94a14 14 0 00-10 23l69 79c8 10 13 23 13 36v26a50 50 0 01-7 26l-10 13a1215 1215 0 01-66 68 12 12 0 009 21h197a12 12 0 008-20 1118 1118 0 01-66-69l-10-13a52 52 0 01-8-26v-26c0-13 5-26 14-36l70-78a14 14 0 00-10-24H163z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-51ss9krtcnb";
freezeTemplate(tmpl);
