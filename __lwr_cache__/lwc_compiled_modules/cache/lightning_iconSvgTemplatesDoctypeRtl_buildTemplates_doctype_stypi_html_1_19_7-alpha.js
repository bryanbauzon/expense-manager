import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./stypi.css";

import _implicitScopedStylesheets from "./stypi.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#fcc003" d="M51 0A51 51 0 000 51v538c0 28 23 51 51 51h457c28 0 51-23 51-51V203L370 0z"${3}/><path fill="#e4a201" d="M560 204v10H432s-63-13-62-68c0 0 3 58 61 58z"${3}/><path fill="#f9e3b6" d="M371 0v146c0 16 11 58 61 58h128z"${3}/><path fill="#2e2204" d="M102 364v115l61 60h131c9 0 16-7 16-15V364c0-9-7-16-16-16H118c-9 0-16 7-16 16z"${3}/><path fill="#fcc003" d="M275 452H138v-16h137zm0-36H138v-16h137zm0 72h-89v-17h89z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2pkk4u03vgu";
freezeTemplate(tmpl);
