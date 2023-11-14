import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lower_flag.css";

import _implicitScopedStylesheets from "./lower_flag.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M438 35v450c0 8 7 15 15 15h30c8 0 15-7 15-15V35c0-8-7-15-15-15h-30c-8 0-15 7-15 15zM231 299c35-19 77-32 154-6 6 3 13-2 13-9V51c0-6-4-12-10-14C195-30 213 142 53 58c-7-4-15 1-15 8v199a156 156 0 01193 34zm-30 26l-7-7c-5-6-15-6-21 0l-60 60-60-60c-5-6-15-6-21 0l-7 7c-5 5-5 15 0 21l60 60-60 60c-6 5-6 15 0 21l7 7c5 6 15 6 21 0l60-60 60 60c5 6 15 6 21 0l7-7c6-5 6-15 0-21l-60-60 60-60c6-6 6-16 0-21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7336h7nk5dj";
freezeTemplate(tmpl);
