import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./planogram.css";

import _implicitScopedStylesheets from "./planogram.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M774 715h-33V536c0-9-8-17-17-17H537c-9 0-17 8-17 17v178h-50V536c0-9-8-17-17-17H266c-9 0-17 8-17 17v178h-33c-11 0-20 9-20 20v40c0 11 9 20 20 20h557c11 0 20-9 20-20v-40c1-11-8-19-19-19zM565 565h130v45H565zm-271 0h130v45H294zm480-175h-33V211c0-9-8-17-17-17H537c-9 0-17 8-17 17v179h-50V211c0-9-8-17-17-17H266c-9 0-17 8-17 17v179h-33c-11 0-20 10-20 20v40c0 11 9 20 20 20h557c11 0 20-9 20-20v-40c1-12-8-20-19-20zM565 240h130v45H565zm-271 0h130v45H294z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3hag4lhdbc8";
freezeTemplate(tmpl);
