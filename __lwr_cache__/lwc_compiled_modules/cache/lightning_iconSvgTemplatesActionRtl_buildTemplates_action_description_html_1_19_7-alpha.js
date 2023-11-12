import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./description.css";

import _implicitScopedStylesheets from "./description.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M4 8v36c0 2 2 4 4 4h36c2 0 4-2 4-4V8c0-2-2-4-4-4H8C6 4 4 6 4 8zm36 16c0 .6-.4 1-1 1H29c-.6 0-1-.4-1-1V14c0-.6.4-1 1-1h10c.6 0 1 .4 1 1zM16 38c0-.6.4-1 1-1h22c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H17c-.6 0-1-.4-1-1zm-4-8c0-.6.4-1 1-1h26c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H13c-.6 0-1-.4-1-1zm0-8c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H13c-.6 0-1-.4-1-1zm0-8c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H13c-.6 0-1-.4-1-1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1kj4bdgs8h5";
freezeTemplate(tmpl);
