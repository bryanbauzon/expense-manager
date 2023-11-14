import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./groups.css";

import _implicitScopedStylesheets from "./groups.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M367 524c-17-27-27-59-27-94 0-59 25-109 65-139a83 83 0 00-75-41c-58 0-90 46-90 100 0 29 10 53 29 71 11 10 20 23 20 37s-5 26-38 40c-47 21-90 48-91 92 0 29 19 50 46 50h43c7 0 14-4 17-10 21-38 60-62 93-78 11-5 15-18 8-28zm382-26c-33-14-38-27-38-40 0-14 9-27 20-37 19-18 29-42 29-71 0-54-32-100-90-100-35 0-60 16-75 41 40 30 65 79 65 139 0 35-9 67-27 94-7 10-3 23 8 29 33 16 72 40 93 78 3 6 10 10 17 10h43c27 0 46-21 46-50-1-44-44-72-91-93zm-162 96c-36-15-41-29-41-44s10-30 22-41c21-19 33-47 33-79 0-59-36-110-100-110s-100 51-100 110c0 32 12 59 33 79 12 11 22 26 22 41s-6 29-41 44c-54 22-104 48-105 96 0 32 23 60 53 60h274c30 0 53-28 53-60-1-48-51-74-103-96z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3r553bo935g";
freezeTemplate(tmpl);
