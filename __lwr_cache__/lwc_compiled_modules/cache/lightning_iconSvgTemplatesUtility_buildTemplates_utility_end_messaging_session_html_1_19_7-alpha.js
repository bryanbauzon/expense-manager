import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./end_messaging_session.css";

import _implicitScopedStylesheets from "./end_messaging_session.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M246 406c0-28 7-54 20-77h-23c-5 0-8-3-8-8v-92c0-5 3-8 8-8h92c5 0 8 3 8 8v30c19-8 41-13 63-13 15 0 29 2 42 6l3-33c-1-110-96-198-215-198S22 109 22 217c0 34 10 66 26 95 3 4 4 10 2 15l-28 76c-3 7 4 13 12 12l77-30c4-2 10-1 15 2a230 230 0 00112 29h8zM128 122c0-5 3-8 8-8h199c5 0 8 3 8 8v46c0 5-4 8-9 8H136c-5 0-8-3-8-8zm62 199c0 5-4 8-9 8h-46c-5 0-8-3-8-8v-92c0-5 3-8 8-8h47c5 0 8 3 8 8zm128 25l60 60-60 60c-6 6-6 16 0 21l7 7c6 6 16 6 21 0l60-60 60 60c6 6 16 6 21 0l7-7c6-6 6-16 0-21l-60-60 60-60c6-6 6-16 0-21l-7-7c-6-6-16-6-21 0l-60 60-60-60c-6-6-16-6-21 0l-7 7c-6 6-6 16 0 21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-65l3lqvtoie";
freezeTemplate(tmpl);
