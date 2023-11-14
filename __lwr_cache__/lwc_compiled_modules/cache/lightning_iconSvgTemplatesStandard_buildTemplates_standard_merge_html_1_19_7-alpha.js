import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./merge.css";

import _implicitScopedStylesheets from "./merge.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M705 725c-70-34-120-94-145-163-10-26-16-53-19-79v-44h136c11 0 17-12 10-22L510 205c-6-8-20-8-25 0L312 417c-6 8 0 22 10 22h137v44c-3 27-10 55-19 79-26 68-75 129-145 163-10 4-14 16-10 26l16 38c5 11 16 14 27 8 76-36 135-94 172-162 37 69 96 126 173 162 11 5 22 4 27-8l16-38c4-10-1-22-11-26z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1onpokplnj8";
freezeTemplate(tmpl);
