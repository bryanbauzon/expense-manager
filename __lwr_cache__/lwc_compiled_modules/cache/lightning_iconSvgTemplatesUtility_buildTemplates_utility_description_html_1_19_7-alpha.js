import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./description.css";

import _implicitScopedStylesheets from "./description.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M44 4H8a4 4 0 00-4 4v36a4 4 0 004 4h36a4 4 0 004-4V8a4 4 0 00-4-4zM12 14c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H13c-.6 0-1-.4-1-1V14zm24 26c0 .6-.4 1-1 1H13c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h22c.6 0 1 .4 1 1v2zm4-8c0 .6-.4 1-1 1H13c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h26c.6 0 1 .4 1 1v2zm0-8c0 .6-.4 1-1 1H29c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v2zm0-8c0 .6-.4 1-1 1H29c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6j2gsasijn1";
freezeTemplate(tmpl);
