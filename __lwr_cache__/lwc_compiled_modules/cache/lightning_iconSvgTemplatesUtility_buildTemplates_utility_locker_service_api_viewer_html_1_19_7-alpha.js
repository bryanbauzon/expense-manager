import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./locker_service_api_viewer.css";

import _implicitScopedStylesheets from "./locker_service_api_viewer.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M180 385c0 8 7 15 15 15h26l-1-20c0-14 2-27 5-40h-30c-8 0-15 7-15 15v30zm105-245h-90c-8 0-15 7-15 15v30c0 8 7 15 15 15h90c8 0 15-7 15-15v-30c0-8-7-15-15-15zM35 100h410c8 0 15-7 15-15V35c0-8-7-15-15-15H35c-8 0-15 7-15 15v50c0 8 7 15 15 15zm410 100c8 0 15-7 15-15v-30c0-8-7-15-15-15h-90c-8 0-15 7-15 15v30c0 8 7 15 15 15h90zm-265 85c0 8 7 15 15 15h46a160 160 0 0154-56c-3-3-6-4-10-4h-90c-8 0-15 7-15 15v30zm-55-145H35c-8 0-15 7-15 15v30c0 8 7 15 15 15h90c8 0 15-7 15-15v-30c0-8-7-15-15-15zm106 300h-36c-8 0-15 7-15 15v30c0 8 7 15 15 15h79a162 162 0 01-43-60zM125 340H35c-8 0-15 7-15 15v30c0 8 7 15 15 15h90c8 0 15-7 15-15v-30c0-8-7-15-15-15zm0 100H35c-8 0-15 7-15 15v30c0 8 7 15 15 15h90c8 0 15-7 15-15v-30c0-8-7-15-15-15zm0-200H35c-8 0-15 7-15 15v30c0 8 7 15 15 15h90c8 0 15-7 15-15v-30c0-8-7-15-15-15zm254 21c-66 0-120 54-120 120s54 120 120 120 120-54 120-120-54-120-120-120zm79 85l-96 97c-2 2-5 2-7 0l-56-56a5 5 0 010-7l21-21c2-2 5-2 7 0l29 29h5l69-70c2-2 5-2 7 0l21 21c3 2 3 5 0 7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-20s1stbl85i";
freezeTemplate(tmpl);
