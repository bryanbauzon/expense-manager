import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./formula.css";

import _implicitScopedStylesheets from "./formula.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M302 32c-8-6-19-9-32-9l-9 1c-35 5-58 38-72 68l-17 44-8 21-5 15h-36c-5 0-9 4-9 9s4 9 9 9h31l-18 75a2510 2510 0 01-45 194c-6 17-14 26-25 26l-5-1-2-4 3-7c2-3 3-7 3-10 0-7-2-12-7-16a20 20 0 00-15-6c-6 0-11 2-16 6s-7 10-7 17c0 10 4 18 12 25s18 10 31 10c21 0 41-10 55-26 9-10 15-22 21-35 18-39 27-82 37-123l29-127h35c5 0 9-4 9-9s-4-9-9-9h-31a640 640 0 0141-118c7-11 14-17 21-17l6 2 1 4-3 7-3 12c0 6 2 10 6 14s9 6 15 6a20 20 0 0015-6c4-4 6-10 6-17 1-11-3-19-12-25zm159 200c13 0 38-10 38-44 0-33-24-35-31-35-15 0-29 11-42 33l-27 47-7-35c-3-14-19-44-52-44s-63 19-63 19a20 20 0 00-9 17c0 11 9 20 20 20l9-2s25-14 30 0l4 14 17 70-22 31s-24-9-37-9-38 10-38 44 24 35 31 35c15 0 29-11 42-33l27-47 10 44a53 53 0 0053 37s26 0 57-17c7-3 13-10 13-19a20 20 0 00-20-20l-9 2s-22 12-29 3c-5-10-10-24-13-40l-10-49 22-32c-1 1 24 10 36 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-33unfcsmovg";
freezeTemplate(tmpl);
