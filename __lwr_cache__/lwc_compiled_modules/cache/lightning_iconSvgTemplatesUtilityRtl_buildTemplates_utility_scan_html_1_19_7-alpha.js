import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./scan.css";

import _implicitScopedStylesheets from "./scan.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M485 320a16 16 0 0115 15v88q0 47-45 47h-90a15.5 15.5 0 010-31h83c16 0 22-6 22-23v-81a16 16 0 0115-15zm-450 0a16 16 0 0115 15v80c0 18 6 24 23 24h82a15.5 15.5 0 010 31H65q-45 0-45-46v-89a16 16 0 0115-15zm167-180c7 0 13 5 13 10v220c0 6-6 10-13 10h-34c-7 0-13-5-13-10V150c0-6 6-10 13-10zm-87 0a10 10 0 0110 10v220a10 10 0 01-10 10h-10a10 10 0 01-10-10V150a10 10 0 0110-10zm150 0a10 10 0 0110 10v220a10 10 0 01-10 10h-10a10 10 0 01-10-10V150a10 10 0 0110-10zm150 0a10 10 0 0110 10v220a10 10 0 01-10 10h-10a10 10 0 01-10-10V150a10 10 0 0110-10zm-63 0c7 0 13 5 13 10v220c0 6-6 10-13 10h-34c-7 0-13-5-13-10V150c0-6 6-10 13-10zm103-90q45 0 45 47v88a15 15 0 01-30 0v-80c0-18-6-24-23-24h-82a15.5 15.5 0 010-31zm-300 0a15.5 15.5 0 010 31H72c-16 0-22 6-22 23v81a16 16 0 01-15 15 16 16 0 01-15-15V97q0-47 45-47z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4nslpcj4cd6";
freezeTemplate(tmpl);
