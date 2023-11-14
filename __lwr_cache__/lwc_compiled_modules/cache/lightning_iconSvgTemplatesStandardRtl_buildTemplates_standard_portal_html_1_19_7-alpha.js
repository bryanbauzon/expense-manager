import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./portal.css";

import _implicitScopedStylesheets from "./portal.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M720 220H280c-33 0-60 27-60 60v440c0 33 27 60 60 60h440c33 0 60-27 60-60V280c0-33-27-60-60-60zM590 626c3 12-7 24-19 24H430c-13 0-22-12-19-24l32-110c-31-22-49-61-41-104 8-40 39-72 79-79a99 99 0 01119 99c0 35-17 65-43 83z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-16da512lbfd";
freezeTemplate(tmpl);
