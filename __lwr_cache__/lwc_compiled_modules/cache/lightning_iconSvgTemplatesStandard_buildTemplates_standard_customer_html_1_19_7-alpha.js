import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./customer.css";

import _implicitScopedStylesheets from "./customer.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M554 661h148c5 0 9-4 9-8l27-95a9 9 0 00-9-13H500l-3-14c-2-6-8-11-15-11h-24c-8 0-15 6-16 14 0 8 5 15 13 16h16l13 44 34 115c2 6 8 10 14 11h174c8 0 15-6 16-14s-5-15-13-16H554c-6 0-12-4-15-10v-1a14 14 0 0115-18zm-111-54l-5-16c-9-3-18-9-24-17a59 59 0 0145-98h24c19 0 37 9 49 25h63c-19-12-39-23-60-31-36-15-40-29-40-44 2-15 9-29 21-40 22-20 33-48 32-78 0-58-36-108-98-108s-98 50-98 108c-1 30 11 58 31 78 13 10 21 25 22 41 0 14-5 29-40 43-54 21-103 48-104 95-1 31 22 57 53 59h131z"${3}/><circle cx="557" cy="775" r="25"${3}/><circle cx="678" cy="775" r="25"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4kaedupvcnq";
freezeTemplate(tmpl);
