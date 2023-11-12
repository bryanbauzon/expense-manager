import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom101.css";

import _implicitScopedStylesheets from "./custom101.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M448.9 386.5a74.7 74.7 0 11-.7 149.4 74.7 74.7 0 01.7-149.4zm5 315c5.4-2.4 11.7-6 19.4-10.2a364.2 364.2 0 0158.9-28.3 391 391 0 01-16.4-37.7c0-.9-.6-2-1-3a174.2 174.2 0 11107.6-173.6c39.2 4.2 61.2 23.6 73 45.1a249 249 0 10-257.7 215.6l16.2-8zm298.8 22.3c-23.3-10.5-57.7-37-108.8-46 13.3-14 23-35.8 33.2-61.8 6-15 4.8-27.8 4.8-46 0-13.3 2.4-35-.9-46.9-11.3-39.8-39.8-51.1-73-51.1s-61.8 11-73 51.4c-3.3 12-.9 33.2-.9 46.9 0 18.2-1 31 4.8 46 10.1 26 19.9 47.8 33.2 61.9-51.3 9.3-85.4 35.8-108.6 46-47.8 21.1-48.1 44.5-48.1 44.5v39.5h384.5v-39.5c.6 0 .6-23.6-47.6-44.8h.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6ci5vlh3qsj";
freezeTemplate(tmpl);
