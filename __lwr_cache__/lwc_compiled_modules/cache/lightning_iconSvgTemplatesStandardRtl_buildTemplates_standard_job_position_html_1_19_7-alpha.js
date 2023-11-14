import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./job_position.css";

import _implicitScopedStylesheets from "./job_position.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M666 511a114 114 0 00-114 114c0 77 81 150 106 169a11 11 0 0015 0c25-20 106-92 106-169a113 113 0 00-113-114zm0 160a47 47 0 1147-47 48 48 0 01-47 47zM504 797h14c52-5 24-37 24-37-32-46-50-91-50-135a137 137 0 016-42c2-20-6-25-10-27h-2a185 185 0 00-24-1 243 243 0 00-240 209c0 12 4 35 42 35h238c0-2 1-2 2-2z"${3}/><circle cx="463" cy="363" r="160"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3fakhojv10b";
freezeTemplate(tmpl);
