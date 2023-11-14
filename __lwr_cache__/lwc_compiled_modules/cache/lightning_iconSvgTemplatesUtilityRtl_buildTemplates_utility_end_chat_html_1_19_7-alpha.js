import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./end_chat.css";

import _implicitScopedStylesheets from "./end_chat.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M246 406a160 160 0 01202-154c2-11 3-21 3-32-1-110-97-198-215-198-119 0-214 88-214 196 0 34 10 66 26 95 3 4 4 10 2 15l-28 76c-3 7 4 13 12 12l77-30c4-2 10-1 15 2a230 230 0 00112 29h8zm98-223c20 0 36 16 36 36s-16 36-36 36-36-16-36-36 16-36 36-36zm-215 71c-20 0-36-16-36-36s16-36 36-36 36 16 36 36-17 36-36 36zm107 0c-20 0-36-16-36-36s16-36 36-36 36 16 36 36-16 36-36 36zm81 92l60 60-60 60c-6 6-6 16 0 21l7 7c6 6 16 6 21 0l60-60 60 60c6 6 16 6 21 0l7-7c6-6 6-16 0-21l-60-60 60-60c6-6 6-16 0-21l-7-7c-6-6-16-6-21 0l-60 60-60-60c-6-6-16-6-21 0l-7 7c-5 5-5 15 0 21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1eoeesk3s4o";
freezeTemplate(tmpl);
