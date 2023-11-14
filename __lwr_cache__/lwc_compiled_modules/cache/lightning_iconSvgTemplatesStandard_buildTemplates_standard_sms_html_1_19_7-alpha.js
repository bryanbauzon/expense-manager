import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sms.css";

import _implicitScopedStylesheets from "./sms.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M491 215c-169 0-303 124-303 278 0 48 14 94 37 135 4 6 5 14 3 22l-39 108c-4 10 6 19 17 17l109-42c6-3 14-1 22 3 46 25 100 41 159 41 164-3 300-128 300-281-1-157-137-281-305-281zM369 540c-4 6-8 13-13 17s-11 8-19 10c-6 3-14 3-22 3-10 0-19-1-28-5s-18-9-24-17l-3-3c-1-1 0-4 3-6l20-19c3-3 5-3 6-1l3 4 10 9c6 4 13 4 20 3 3 0 4-1 6-3l4-4 1-5c0-5-1-6-3-8-3-3-6-5-11-6s-10-4-17-5l-18-8c-6-4-10-9-14-14-4-6-6-14-6-24 0-9 1-17 5-23s8-11 14-15c5-4 11-8 19-9 15-4 30-4 46 1 8 3 15 8 19 10l4 3c3 1 1 5-1 8l-19 19c-3 3-6 3-9 0-3-1-4-4-5-4-6-4-15-5-23-4-3 0-4 1-5 3l-2 3-1 5c0 4 1 5 3 6 3 3 6 4 11 6 5 1 10 4 17 5l18 8c6 4 10 9 14 14 4 6 6 14 6 24-1 8-2 16-6 22zm211 18c0 8-6 13-14 13h-13c-8 0-11-5-11-13v-75c0-8-10-9-13-3l-22 57c-1 5-6 8-11 8h-9c-5 0-10-4-11-8l-23-57c-3-6-13-5-13 3v75c0 8-6 13-14 13h-13c-8 0-11-5-11-13V418c0-8 5-13 11-13h33c5 0 10 4 11 8l25 66c3 5 10 5 11 0l25-66c1-5 6-8 11-8h34c8 0 14 5 14 13 3 0 3 140 3 140zm133-17c-4 6-8 13-14 17-5 4-11 8-19 10-8 3-14 3-22 3-10 0-19-1-28-5s-18-9-24-17l-3-3c-1-1 0-4 3-6l20-19c3-3 5-3 6-1l3 4 10 9c6 4 14 4 20 3 3-1 5-1 6-3l4-4 1-5c0-5-1-6-3-8-3-3-6-5-11-6s-10-4-17-5l-18-8c-6-4-11-9-15-14-4-6-6-14-6-24 0-9 1-17 5-23s8-11 14-15c5-4 13-8 19-9 15-4 30-4 46 1 8 3 15 8 19 11l4 4c3 1 1 5-1 8l-19 19c-3 3-6 3-9 0-3-1-4-4-5-4-6-4-15-5-23-4-3 0-4 1-5 3l-4 4-1 5c0 4 1 5 3 6 3 3 6 4 11 6 5 1 10 4 17 5l18 8c6 4 10 9 15 14 4 6 6 14 6 24 3 4 1 13-3 19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4nh663943do";
freezeTemplate(tmpl);
