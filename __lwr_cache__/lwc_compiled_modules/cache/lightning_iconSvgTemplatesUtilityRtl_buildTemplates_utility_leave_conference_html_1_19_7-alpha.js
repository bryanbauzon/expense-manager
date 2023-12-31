import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./leave_conference.css";

import _implicitScopedStylesheets from "./leave_conference.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M257 224c-5 7-2 17 6 22 16 9 34 19 49 33a160 160 0 0188-32c-11-19-34-32-58-43-23-10-28-19-28-30 0-10 7-19 14-28a70 70 0 0021-53c1-40-22-75-64-75a63 63 0 00-54 31c29 22 46 60 46 103-1 28-8 52-20 72zm61 123l60 60-60 60c-6 6-6 16 0 21l7 7c6 6 16 6 21 0l60-60 60 60c6 6 16 6 21 0l7-7c6-6 6-16 0-21l-60-60 60-60c6-6 6-16 0-21l-7-7c-6-6-16-6-21 0l-60 60-60-60c-6-6-16-6-21 0l-7 7c-5 5-5 15 0 21zm-36-40c-14-14-35-23-56-33-26-11-30-22-30-33s7-23 16-31a83 83 0 0023-60c0-45-26-84-72-84h-5c-46 0-72 39-72 84 0 24 8 45 23 60 9 8 16 19 16 31 0 11-3 22-30 33-38 17-73 34-75 70 2 25 19 44 41 44h186a170 170 0 0135-81z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-40sof717v33";
freezeTemplate(tmpl);
