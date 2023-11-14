import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./loop.css";

import _implicitScopedStylesheets from "./loop.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M234 583v-5c0-9 8-15 16-15h57c14 0 17 18 17 18a201 201 0 10189-269c-66 0-126 33-162 83 3 5 9 7 17 7h94c11 0 20 9 20 20v42c0 11-8 19-19 19H218c-10 0-18-9-18-18V220c2-11 11-20 22-20h40c11 0 20 9 20 20v94c0 12 7 17 16 9l12-12c16-17 35-32 56-44h1a285 285 0 01432 246 286 286 0 01-553 105l-11-33z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-45j7khqd2je";
freezeTemplate(tmpl);
