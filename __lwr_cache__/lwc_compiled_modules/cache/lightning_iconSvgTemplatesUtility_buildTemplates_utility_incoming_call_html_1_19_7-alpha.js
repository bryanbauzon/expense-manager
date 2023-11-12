import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./incoming_call.css";

import _implicitScopedStylesheets from "./incoming_call.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M485 379l-61-49a40 40 0 00-48-1l-52 38c-6 5-15 4-21-2l-78-70-70-78c-6-6-6-14-2-21l38-52a40 40 0 00-1-48l-49-61a40 40 0 00-59-3L30 84c-8 8-12 19-12 30 5 102 51 199 119 267s165 114 267 119c11 1 22-4 30-12l52-52a36 36 0 00-1-57zM296 240h154c10 0 13-11 5-19l-49-50 90-91c5-5 5-14 0-19l-37-37c-5-5-13-5-19 0l-91 91-51-49c-7-9-18-6-18 4v153c0 7 9 17 16 17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-24ofe7jiu3a";
freezeTemplate(tmpl);
