import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./channel_programs.css";

import _implicitScopedStylesheets from "./channel_programs.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M490 200c-165 0-300 135-300 300s135 300 300 300 300-135 300-300-135-300-300-300zm238 270h-79c-3-71-19-133-43-180 66 37 112 103 122 180zM460 273v197h-69c5-94 35-168 69-197zm0 257v197c-34-29-64-103-69-197zm60 197V530h69c-5 94-35 168-69 197zm0-257V273c34 29 64 103 69 197zM374 290c-24 47-39 109-43 180h-79c10-77 56-143 122-180zM252 530h79c3 71 19 133 43 180a242 242 0 01-122-180zm354 180c24-47 39-109 43-180h79c-10 77-56 143-122 180z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-18iu8pjl9v";
freezeTemplate(tmpl);
