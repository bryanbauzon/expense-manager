import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quote.css";

import _implicitScopedStylesheets from "./quote.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M452 21H277c-11-1-21 5-29 13L34 249a50 50 0 000 68l170 170a50 50 0 0068 0l217-218c8-8 13-21 12-32V69a50 50 0 00-49-48zM279 373l-11 11c-6 6-16 6-22 0L137 276c-6-6-6-16 0-22l11-11c6-6 16-6 22 0l109 109c7 5 7 15 0 21zm64-64l-11 11c-6 6-16 6-22 0L201 212c-6-6-6-16 0-22l11-11c6-6 16-6 22 0l109 109c7 5 7 15 0 21zm45-136c-22 0-40-18-40-40s18-40 40-40 40 18 40 40-18 40-40 40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7050f6j6fia";
freezeTemplate(tmpl);
