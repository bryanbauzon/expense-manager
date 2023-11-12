import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./layout.css";

import _implicitScopedStylesheets from "./layout.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48 50H4a2 2 0 01-2-2V4c0-1.1.9-2 2-2h44a2 2 0 012 2v44a2 2 0 01-2 2zM6 46h40V6H6z"${3}/><path d="M39 20H13c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h26c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1zM19 40h-6c-.6 0-1-.4-1-1V27c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1zm20 0H27c-.6 0-1-.4-1-1V27c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-gfaa20i4bd";
freezeTemplate(tmpl);
