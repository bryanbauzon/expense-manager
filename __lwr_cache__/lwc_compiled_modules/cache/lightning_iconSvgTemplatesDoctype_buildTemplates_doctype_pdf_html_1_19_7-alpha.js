import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pdf.css";

import _implicitScopedStylesheets from "./pdf.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#8e030f" d="M51 0A51 51 0 000 51v538c0 28 23 51 51 51h458c28 0 51-23 51-51V203L371 0z"${3}/><path fill="#640103" d="M560 204v10H432s-63-13-61-67c0 0 2 57 60 57z"${3}/><path fill="#feb8ab" d="M371 0v146c0 17 11 58 61 58h128z"${3}/><path fill="#fff" d="M149 490h-33v41c0 4-3 7-8 7-4 0-7-3-7-7V429c0-6 5-11 11-11h37c24 0 38 17 38 36 0 20-14 36-38 36zm-1-59h-32v46h32c14 0 24-9 24-23s-10-23-24-23zm104 107h-30c-6 0-11-5-11-11v-98c0-6 5-11 11-11h30c37 0 62 26 62 60s-24 60-62 60zm0-107h-26v93h26c29 0 46-21 46-47 1-25-16-46-46-46zm163 0h-58v39h57c4 0 6 3 6 7s-3 6-6 6h-57v48c0 4-3 7-8 7-4 0-7-3-7-7V429c0-6 5-11 11-11h62c4 0 6 3 6 7 1 3-2 6-6 6z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 560 640",
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
tmpl.stylesheetToken = "lwc-52i94p1u7dv";
freezeTemplate(tmpl);
