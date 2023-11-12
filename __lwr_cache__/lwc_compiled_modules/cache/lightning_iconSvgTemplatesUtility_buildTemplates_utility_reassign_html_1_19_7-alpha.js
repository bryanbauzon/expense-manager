import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./reassign.css";

import _implicitScopedStylesheets from "./reassign.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M232 102A205 205 0 0029 57c-3 0-7 5-7 13v39c0 8 7 10 11 9 54-22 120-12 163 33l11 11c6 6 1 17-7 17h-78c-8 0-15 6-15 15v30c0 8 6 15 15 15l192 2c8 0 15-6 15-15l1-191c0-8-6-15-15-15h-30c-8 0-16 6-16 14l-1 79c0 8-11 13-17 7l-19-18zM35 278h30c8 0 15 7 15 15v132c0 8 7 15 15 15h330c8 0 15-7 15-15V169c0-8-7-15-15-15h-40c-8 0-15-7-15-15v-30c0-8 7-15 15-15h75a40 40 0 0140 40v326a40 40 0 01-40 40H60a40 40 0 01-40-40V293c0-8 7-15 15-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4kb5uscjs1v";
freezeTemplate(tmpl);
