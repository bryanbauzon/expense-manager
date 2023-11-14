import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dialing.css";

import _implicitScopedStylesheets from "./dialing.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M485 379l-61-49a39 39 0 00-48-1l-52 38c-6 5-15 4-21-2l-78-70-70-78c-6-6-6-14-2-21l38-52c11-14 10-34-1-48l-49-61c-15-18-42-20-59-3L30 84c-8 8-12 19-12 30 5 102 51 199 119 267s165 114 267 119c11 1 22-4 30-12l52-52c19-15 18-43-1-57zm-65-134c12-17 19-38 19-60-1-58-48-105-106-105-22 0-43 7-60 19l-43-44c28-22 64-35 103-35 91 0 166 74 166 166 0 39-13 75-36 103z"${3}/><circle cx="334" cy="184" r="45"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-f5fod3uvnt";
freezeTemplate(tmpl);
