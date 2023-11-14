import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./goals.css";

import _implicitScopedStylesheets from "./goals.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 200a60 60 0 00-40 105v455c0 22 18 40 40 40s40-18 40-40V305a60 60 0 00-40-105zm505 108c-157 82-244-59-392-5-8 3-13 11-13 19v258c0 13 13 23 26 19 142-43 229 91 384 7 6-4 10-10 10-17V317c0-8-8-13-15-9zm-45 137c-19 5-38 5-58 5h-2v60h2c20 0 39-1 58-6v59c-18 6-36 8-58 8h-2v-60c-20 0-40-3-60-7v60l-41-11-19-6v-59c-22-7-39-13-60-16v60l-35-2-25 2v-60a211 211 0 0160 0v-57c-10-2-21-4-35-4l-25 2v-60l25-2c14 0 24 2 35 4v60l52 16 8 2v-60c20 6 39 10 60 14v59c19 4 39 4 60 4v-60h2c20 0 39 2 58-2z"${3}/><path d="M540 433v55l13 4c16 4 31 9 47 12v-57z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-8t3c09c3v8";
freezeTemplate(tmpl);
