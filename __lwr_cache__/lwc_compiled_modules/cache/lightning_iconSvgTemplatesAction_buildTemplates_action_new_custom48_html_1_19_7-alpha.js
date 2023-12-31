import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom48.css";

import _implicitScopedStylesheets from "./new_custom48.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M484 52h-80V36c0-9-7-16-16-16H132c-9 0-16 7-16 16v16H36c-9 0-16 7-16 16v104c0 40 32 72 72 72h37a143 143 0 00264 0h35c40 0 72-32 72-72V68c0-9-7-16-16-16zM92 196c-14 0-24-10-24-24v-72h48v85l1 11zm360-24c0 14-10 24-24 24h-25l1-10v-86h48zM340 452h-8c-26 0-48-22-48-48v-16c0-5-3-8-8-8h-32c-5 0-8 3-8 8v16c0 26-22 48-48 48h-8c-9 0-16 7-16 16v16c0 9 7 16 16 16h160c9 0 16-7 16-16v-16c0-9-7-16-16-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-jdp1vb39eu";
freezeTemplate(tmpl);
