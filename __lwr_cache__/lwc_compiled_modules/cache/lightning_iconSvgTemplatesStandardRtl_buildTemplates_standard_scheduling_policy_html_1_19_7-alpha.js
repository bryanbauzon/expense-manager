import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./scheduling_policy.css";

import _implicitScopedStylesheets from "./scheduling_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M220 740a57 57 0 0056 60h323l-7-14a77 77 0 01-19-48 83 83 0 0118-48 74 74 0 0122-48 85 85 0 0145-20h1a77 77 0 0148-19 83 83 0 0148 18 110 110 0 0125 6V440c0-18-20-21-20-21H240a20 20 0 00-20 20z"${3}/><path d="M681 831l-52 74-13-35h-35l45-61a102 102 0 0025 8 15 15 0 006 1 22 22 0 005 3 65 65 0 0019 10zm84-23a102 102 0 01-25 8 17 17 0 01-7 1 22 22 0 01-5 3 105 105 0 01-19 12l52 73 13-35h35zm-70-116a31 31 0 1031 31 31 31 0 00-31-31zm85 31c0 11-12 19-15 28s-2 24-9 31-21 5-31 9-18 15-28 15-19-12-28-15-24-2-31-9-5-21-9-31-15-18-15-28 12-19 15-28 2-24 9-31 21-5 31-9 18-15 28-15 19 12 28 15 24 2 31 9 5 21 9 31 15 18 15 28zm-27 0a58 58 0 00-116 0 57 57 0 0058 58 57 57 0 0058-58zm-33-463h-50v-20a40 40 0 00-80 0v20H410v-20a40 40 0 00-80 0v20h-50a60 60 0 00-60 60v20a20 20 0 0020 20h520a20 20 0 0020-20v-20a60 60 0 00-60-60zM480 702c0 14-7 26-17 26H290c-9 0-18-12-18-26v-26c0-14 8-26 18-26h172c9 0 18 12 18 26zm89-158c0 14-8 26-19 26H292c-11 0-20-12-20-26v-26c0-14 9-26 20-26h258c11 0 20 12 20 26v26z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-10s8dkp27eb";
freezeTemplate(tmpl);
