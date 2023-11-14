import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_transforms.css";

import _implicitScopedStylesheets from "./data_transforms.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M500 35c0-8-7-15-14-15H346c-7 0-14 7-14 15v105c0 8 7 15 14 15h140c7 0 14-7 14-15zM188 379c0-8-7-15-14-15H34c-7 0-14 7-14 15v107c0 7 7 14 14 14h140c7 0 14-7 14-15zm226-125a10 10 0 0112 0l64 61c5 4 0 10-7 10h-40c0 67-55 119-127 119v-44c48 0 80-30 80-74h-38c-8 0-12-6-7-10zM94 266c4 2 8 2 11 0l64-61c5-5 0-10-7-10h-38c0-45 32-75 80-75V76c-72 0-128 52-128 118H37c-8 0-12 7-7 10l64 62zm142-6c0-13 10-23 23-23s23 10 23 23-10 23-23 23-23-10-23-23zm73 10l11 8c3 3 5 8 2 11l-4 8a10 10 0 01-8 4h-4l-12-5a40 40 0 01-18 10l-2 14a10 10 0 01-10 8h-8a10 10 0 01-10-8l-2-13a47 47 0 01-17-10l-13 5a10 10 0 01-11-4l-5-8a10 10 0 012-12l11-9a50 50 0 010-20l-10-8a9 9 0 01-3-12l5-8a10 10 0 018-5h3v1l13 5a53 53 0 0117-10l3-13c0-5 4-7 9-7h10c4 0 8 2 8 7l3 13a40 40 0 0116 10l14-5a10 10 0 0110 4l5 8c3 4 2 10-2 12l-10 9a53 53 0 010 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-skhls3334f";
freezeTemplate(tmpl);
