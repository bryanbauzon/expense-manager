import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_model.css";

import _implicitScopedStylesheets from "./data_model.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M444 388a53 53 0 00-26 6l-71-53a90 90 0 0010-42 96 96 0 00-72-92v-81a57 57 0 0032-50 55.8 55.8 0 00-111.5 0 55 55 0 0032 50v80a96 96 0 00-72 94 93 93 0 0010 42l-71 52a58 58 0 00-26-6 56 56 0 1056 55l-1-10 74-55a94 94 0 00110 0l75 55a47 47 0 00-1 10 55.8 55.8 0 10111.5 0 60 60 0 00-59-55zm-172-42a62 62 0 01-11 2 50 50 0 01-47-36 62 62 0 01-1-12 47 47 0 0124-41 48 48 0 0149 0 47 47 0 0124 41 70 70 0 01-2 12 53 53 0 01-36 34z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-20cin08eip";
freezeTemplate(tmpl);
