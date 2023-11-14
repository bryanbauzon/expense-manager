import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./paste.css";

import _implicitScopedStylesheets from "./paste.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M17.5 12h17c.8 0 1.5-.7 1.5-1.5V6a4 4 0 00-4-4H20a4 4 0 00-4 4v4.5c0 .8.7 1.5 1.5 1.5z"${3}/><path d="M44 6h-2.5c-.8 0-1.5.7-1.5 1.5V12a4 4 0 01-4 4H16a4 4 0 01-4-4V7.5c0-.8-.7-1.5-1.5-1.5H8a4 4 0 00-4 4v36a4 4 0 004 4h36a4 4 0 004-4V10a4 4 0 00-4-4zm-6 35c0 .6-.4 1-1 1H15c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h22c.6 0 1 .4 1 1zm0-8c0 .6-.4 1-1 1H15c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h22c.6 0 1 .4 1 1zm0-8c0 .6-.4 1-1 1H15c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h22c.6 0 1 .4 1 1z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-1odore4cme6";
freezeTemplate(tmpl);
