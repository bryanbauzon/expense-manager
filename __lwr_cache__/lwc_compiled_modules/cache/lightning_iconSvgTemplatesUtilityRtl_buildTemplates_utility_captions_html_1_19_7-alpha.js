import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./captions.css";

import _implicitScopedStylesheets from "./captions.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M234 122c-20-6-42-9-63-8-40-2-80 13-109 42a150 150 0 00-42 110 140 140 0 0037 102 140 140 0 00103 38c25 1 50-3 75-12 3-2 6-5 6-13v-31c0-1 0-3-2-4a10 10 0 00-13-5 140 140 0 01-54 10c-23 1-45-7-62-24a92 92 0 01-23-65c0-25 8-50 25-68 17-17 40-26 64-25 18 0 35 3 50 10h5c5 0 10-4 10-10v-37a10 10 0 00-7-10zm264 224a10 10 0 00-14-6c-17 8-35 11-53 11-23 1-46-8-62-24a92 92 0 01-23-66c-1-25 7-49 24-67 17-17 40-26 65-25 17 0 34 3 50 10h4c6 0 10-4 10-10v-37a10 10 0 00-7-10c-20-6-41-9-63-8-40-2-80 13-109 42a150 150 0 00-41 110 140 140 0 0037 102c25 26 60 38 103 38 25 1 50-3 74-12 4-1 7-5 7-13l-1-31-1-4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-10g6adlnjt8";
freezeTemplate(tmpl);
