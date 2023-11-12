import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./copy.css";

import _implicitScopedStylesheets from "./copy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M44 2H18a4 4 0 00-4 4v2h24a4 4 0 014 4v28h2a4 4 0 004-4V6a4 4 0 00-4-4z"${3}/><path d="M38 16a4 4 0 00-4-4H8a4 4 0 00-4 4v30a4 4 0 004 4h26a4 4 0 004-4V16zm-18 7c0 .6-.4 1-1 1h-8c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v2zm8 16c0 .6-.4 1-1 1H11c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v2zm4-8c0 .6-.4 1-1 1H11c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h20c.6 0 1 .4 1 1v2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3ke3oigbpri";
freezeTemplate(tmpl);
