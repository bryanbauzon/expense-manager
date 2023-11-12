import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./notification.css";

import _implicitScopedStylesheets from "./notification.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M460 330h-5a35 35 0 01-35-35V180A160 160 0 00252 20c-86 4-152 78-152 165v111c0 19-16 34-35 34h-5c-22 0-40 19-40 41v15c0 7 7 14 15 14h450c8 0 15-7 15-15v-15a40 40 0 00-40-40zM309 440h-98a10 10 0 00-10 12c5 28 30 48 59 48s54-21 59-48a10 10 0 00-10-12z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6acnr0aecm4";
freezeTemplate(tmpl);
