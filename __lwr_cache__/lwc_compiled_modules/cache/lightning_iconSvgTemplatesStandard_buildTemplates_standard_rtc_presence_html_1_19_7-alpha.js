import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./rtc_presence.css";

import _implicitScopedStylesheets from "./rtc_presence.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M616 198c-112 0-203 86-203 193a188 188 0 0026 94 16 16 0 012 11l-19 62a14 14 0 0017 17l59-21a15 15 0 0111 1 208 208 0 00106 29c112 0 203-87 203-193s-91-193-202-193zM458 762v13a28 28 0 01-28 28H210a28 28 0 01-28-28v-13c0-33 40-54 76-70a14 14 0 004-2 9 9 0 019 0 90 90 0 0050 15 94 94 0 0050-14 9 9 0 018 0 14 14 0 014 2c36 15 75 36 75 69z"${3}/><ellipse cx="320" cy="603" rx="69" ry="76"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4ehmd38ueih";
freezeTemplate(tmpl);
