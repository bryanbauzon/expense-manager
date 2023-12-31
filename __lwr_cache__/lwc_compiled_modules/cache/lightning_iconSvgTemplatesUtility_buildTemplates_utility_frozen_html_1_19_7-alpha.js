import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./frozen.css";

import _implicitScopedStylesheets from "./frozen.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M270 30c6 0 10 4 10 10v459c0 6-4 10-10 10h-20c-6 0-10-4-10-10V40c0-6 4-10 10-10z"${3}/><path d="M260 172l-81-81a10 10 0 010-14l14-14a10 10 0 0114 0l53 53 53-53a10 10 0 0114 0l14 14c4 4 4 10 0 14zm0 195l81 81c4 4 4 10 0 14l-14 14a10 10 0 01-14 0l-53-53-53 53a10 10 0 01-14 0l-14-14a10 10 0 010-14zm211-211c3 5 2 11-4 14L72 403c-5 3-11 2-14-4l-10-17c-3-5-2-11 4-14l395-234c5-3 11-2 14 4z"${3}/><path d="M344 220l28-111c1-6 6-9 12-7l19 5c6 1 9 6 7 12l-19 73 73 19c6 1 9 6 7 12l-5 19c-1 6-6 9-12 7zm-168 99l-28 111c-1 6-6 9-12 7l-19-5c-6-1-9-6-7-12l19-73-73-19c-6-1-9-6-7-12l5-19c1-6 6-9 12-7zM59 139c3-5 9-7 14-4l395 234c5 3 7 9 4 14l-10 17c-3 5-9 7-14 4L52 170c-5-3-7-9-4-14z"${3}/><path d="M176 220L65 249c-6 1-11-1-12-7l-5-19c-1-6 1-11 7-12l73-19-19-73c-1-6 1-11 7-12l19-5c6-1 11 1 12 7zm167 99l111-29c6-1 11 1 12 7l5 19c1 6-1 11-7 12l-73 19 19 73c1 6-1 11-7 12l-19 5c-6 1-11-1-12-7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-32h3rrl3nru";
freezeTemplate(tmpl);
