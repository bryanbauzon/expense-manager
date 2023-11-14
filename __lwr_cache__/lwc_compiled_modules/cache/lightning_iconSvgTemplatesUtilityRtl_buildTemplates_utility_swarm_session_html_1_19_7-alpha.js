import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./swarm_session.css";

import _implicitScopedStylesheets from "./swarm_session.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M190 115l1 2a3 3 0 00-1-2zm1 0v2a43 43 0 004 9 69 69 0 00121 5 164 164 0 01107 123h9a124 124 0 0138 6A208 208 0 00326 86a65 65 0 00-8-23 70 70 0 00-93-30 69 69 0 00-38 74 55 55 0 014 8zm-40 223a69 69 0 00-54-38 82 82 0 01-1-14 168 168 0 0163-130 100 100 0 00-7-10 133 133 0 01-11-34 211 211 0 00-92 174l2 25a70 70 0 10100 27zm341 0a69 69 0 00-123 63l3 5a164 164 0 01-112 44 167 167 0 01-74-18 102 102 0 01-34 33 207 207 0 00109 30 211 211 0 00148-61 63 63 0 0054-4 68 68 0 0029-92zm-301 4a3 3 0 004 4l27-10a5 5 0 015 0 63 63 0 0037 10 71 71 0 0073-68 71 71 0 00-73-69 71 71 0 00-73 69 74 74 0 009 32 7 7 0 011 6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7rrj6nalsb3";
freezeTemplate(tmpl);
