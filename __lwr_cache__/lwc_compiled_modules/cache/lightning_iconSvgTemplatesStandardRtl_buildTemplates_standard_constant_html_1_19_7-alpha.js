import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./constant.css";

import _implicitScopedStylesheets from "./constant.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M794 267c-3-3-8-5-12-5-48-2-99 2-147 2l-172 1c-53 0-94 11-134 47-26 24-50 57-69 85-2 3-3 7-3 11 0 11 9 19 19 19 11 0 14-7 19-15s12-16 19-23c26-25 63-38 99-35-30 84-73 181-134 247-25 28-68 57-78 95-10 39 30 50 61 38 39-15 62-55 82-89 24-43 45-86 64-132l56-133c11-26 15-27 42-27h75c-28 61-55 123-80 186-19 48-53 117-29 169 24 51 92 32 129 6 38-26 62-69 83-109 4-7 8-16 5-24-3-7-10-12-18-12-17 0-21 21-26 34-10 21-34 41-58 37-57-8-6-109 4-136 10-28 22-56 34-83 7-16 13-32 21-47 10-20 10-19 33-20 20-1 75 9 92-2 13-9 22-42 28-66 2-8 0-15-5-19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-263g1t147ut";
freezeTemplate(tmpl);
