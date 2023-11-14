import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sort.css";

import _implicitScopedStylesheets from "./sort.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M509 377c7-7 7-19 0-26L366 207c-7-7-19-7-26 0L197 351c-7 7-7 19 0 26l26 26c7 7 19 7 26 0l45-45c7-7 21-2 21 9v264c0 10 9 19 19 19h37c10 0 19-10 19-19V367c0-11 14-16 21-9l45 45c7 7 19 7 26 0zm274 249l-26-25c-7-7-19-7-26 0l-45 45c-7 7-21 2-21-9V371c0-10-9-19-19-19h-37c-10 0-19 10-19 19v264c0 11-14 16-21 9l-45-45c-7-7-19-7-26 0l-26 27c-7 7-7 19 0 26l143 143c7 7 19 7 26 0l143-143c7-7 7-20-1-26z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3r40nd9tluj";
freezeTemplate(tmpl);
