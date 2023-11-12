import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quip_slide.css";

import _implicitScopedStylesheets from "./quip_slide.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#9050e9" d="M0 51v537c0 29 23 52 51 52h457c28 0 51-23 51-51V210L370 0H51A51 51 0 000 51z"${3}/><path fill="#ece1f9" d="M370 0l190 210H421a52 52 0 01-52-52l1-158z"${3}/><path fill="#5a1ba9" d="M370 159v10c0 28 23 52 52 52h138v-10H421a53 53 0 01-51-52z"${3}/><path fill="#fff" d="M235 467h-69c-4 0-8 3-8 8s3 8 8 8h69c4 0 8-3 8-8s-4-8-8-8zm-70-54h69c4 0 8-3 8-8 0-4-3-8-8-8h-69c-4 0-8 3-8 8 1 5 4 8 8 8zm-23 19c-4 0-8 3-8 8 0 4 3 8 8 8h115c4 0 8-3 8-8 0-4-3-8-8-8H142zm126-65a100 100 0 00-139 2 100 100 0 00-2 139c19 20 45 32 73 32h92c4 0 8-3 8-8v-92c0-28-11-54-32-73zm-68 158a86 86 0 01-62-27 84 84 0 0156-142h5c47 0 85 38 85 85v84h-84z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3s1m8r1u8gu";
freezeTemplate(tmpl);
