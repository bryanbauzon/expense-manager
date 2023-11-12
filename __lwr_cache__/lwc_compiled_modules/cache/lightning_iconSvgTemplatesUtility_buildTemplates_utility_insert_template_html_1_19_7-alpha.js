import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./insert_template.css";

import _implicitScopedStylesheets from "./insert_template.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.5 38H44v-4.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5V38h-4.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5H38v4.5c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5V44h4.5c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM34 29.5c0-.8.7-1.5 1.5-1.5H38V6a4 4 0 00-4-4H6a4 4 0 00-4 4v28a4 4 0 004 4h22v-2.5c0-.8.7-1.5 1.5-1.5H34v-4.5zM16 11c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v2zm12 16c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v2zm4-8c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h22c.6 0 1 .4 1 1v2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ttamvppg1s";
freezeTemplate(tmpl);
