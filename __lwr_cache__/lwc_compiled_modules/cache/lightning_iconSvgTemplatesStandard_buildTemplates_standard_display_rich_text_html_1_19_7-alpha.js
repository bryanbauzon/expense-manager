import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./display_rich_text.css";

import _implicitScopedStylesheets from "./display_rich_text.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M220 718h560c11 0 20 9 20 20v40c0 11-9 20-20 20H220c-11 0-20-9-20-20v-40c0-11 9-20 20-20zm0-180h560c11 0 20 9 20 20v40c0 11-9 20-20 20H220c-11 0-20-9-20-20v-40c0-11 9-20 20-20zm356-180h204c11 0 20 9 20 20v40c0 11-9 20-20 20H576c-11 0-20-9-20-20v-40c0-11 9-20 20-20zm-100 86l-95-234c-2-4-6-7-11-7h-72c-4 0-9 3-10 7l-88 234c-1 4 1 10 7 10h46c4 0 9-4 10-8l18-50h111l20 50c1 4 6 8 10 8h46c6 0 9-5 8-10zM302 336l29-74h6l32 74h-67z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-258lmm24u2c";
freezeTemplate(tmpl);
