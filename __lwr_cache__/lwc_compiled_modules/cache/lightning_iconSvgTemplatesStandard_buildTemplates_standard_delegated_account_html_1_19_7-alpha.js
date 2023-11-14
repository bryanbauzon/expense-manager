import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./delegated_account.css";

import _implicitScopedStylesheets from "./delegated_account.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M768 424H543c-20 0-23 21-23 23v342h268V452c2-22-14-28-20-28zM634 730c0 11-9 21-21 21h-21c-11 0-21-9-21-21v-21c0-11 9-21 21-21h21c11 0 21 9 21 21zm0-105c0 11-9 21-21 21h-21c-11 0-21-9-21-21v-21c0-11 9-21 21-21h21c11 0 21 9 21 21zm0-105c0 11-9 21-21 21h-21c-11 0-21-9-21-21v-21c0-11 9-21 21-21h21c11 0 21 9 21 21zm103 210c0 11-9 21-21 21h-21c-11 0-21-9-21-21v-21c0-11 9-21 21-21h21c11 0 21 9 21 21zm0-105c0 11-9 21-21 21h-21c-11 0-21-9-21-21v-21c0-11 9-21 21-21h21c11 0 21 9 21 21zm0-105c0 11-9 21-21 21h-21c-11 0-21-9-21-21v-21c0-11 9-21 21-21h21c11 0 21 9 21 21zM560 192H213c-20 0-23 21-23 23v573h268V386s0-25 23-25h80c9-1 20-5 20-21V220c1-22-14-28-21-28zM304 721c0 11-9 21-21 21h-21c-11 0-21-9-21-21v-21c0-11 9-21 21-21h21c11 0 21 9 21 21zm0-106c0 11-9 21-21 21h-21c-11 0-21-9-21-21v-21c0-11 9-21 21-21h21c11 0 21 9 21 21zm0-106c0 11-9 21-21 21h-21c-11 0-21-9-21-21v-21c0-11 9-21 21-21h21c11 0 21 9 21 21zm0-106c0 11-9 21-21 21h-21c-11 0-21-9-21-21v-21c0-11 9-21 21-21h21c11 0 21 9 21 21zm0-105c0 11-9 21-21 21h-21c-11 0-21-9-21-21v-21c0-11 9-21 21-21h21c11 0 21 9 21 21zm113 423c0 11-9 21-21 21h-21c-11 0-21-9-21-21v-21c0-11 9-21 21-21h21c11 0 21 9 21 21zm0-106c0 11-9 21-21 21h-21c-11 0-21-9-21-21v-21c0-11 9-21 21-21h21c11 0 21 9 21 21zm0-106c0 11-9 21-21 21h-21c-11 0-21-9-21-21v-21c0-11 9-21 21-21h21c11 0 21 9 21 21zm0-106c0 11-9 21-21 21h-21c-11 0-21-9-21-21v-21c0-11 9-21 21-21h21c11 0 21 9 21 21zm0-105c0 11-9 21-21 21h-21c-11 0-21-9-21-21v-21c0-11 9-21 21-21h21c11 0 21 9 21 21zm114 0c0 11-10 21-21 21h-21c-11 0-21-9-21-21v-21c0-11 9-21 21-21h21c11 0 21 9 21 21zm264 7c-6-5-16-4-21 2l-8 10c-7-61-52-86-86-94l8-5c7-4 9-14 5-21s-14-9-21-5l-40 26c-4 2-6 6-7 10s0 8 3 12l33 42c3 4 7 6 12 6 3 0 7-1 9-3 7-5 8-15 3-21l-8-11c21 5 54 22 59 68l-7-8c-6-6-15-6-21 0s-6 15 0 21l33 34c3 3 7 4 11 4h1c4 0 8-2 11-5l34-42c4-5 3-15-3-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7ofcaa6uniq";
freezeTemplate(tmpl);
