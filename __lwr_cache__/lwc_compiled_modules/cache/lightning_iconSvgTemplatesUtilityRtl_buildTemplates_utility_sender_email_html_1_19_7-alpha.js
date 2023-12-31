import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sender_email.css";

import _implicitScopedStylesheets from "./sender_email.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M275 165c0-54-32-101-88-101s-88 47-88 101a100 100 0 0028 72 58 58 0 0120 38c0 14-4 26-36 40-46 20-90 44-90 87a50 50 0 0012 36 50 50 0 0034 17h206a58 58 0 01-8-30V318l-3-1c-30-15-36-28-36-41a53 53 0 0120-38 100 100 0 0029-72zm120 234a6 6 0 0010 0l93-88c2-3 1-8-5-8H308c-5 0-10 5-6 9l94 86zm105-54a5 5 0 00-8-3l-74 67c-5 5-10 7-17 7s-13-2-18-6l-73-68a5 5 0 00-9 4v94c0 9 7 16 17 16h165c10 0 17-7 17-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3n3tkn59qg4";
freezeTemplate(tmpl);
