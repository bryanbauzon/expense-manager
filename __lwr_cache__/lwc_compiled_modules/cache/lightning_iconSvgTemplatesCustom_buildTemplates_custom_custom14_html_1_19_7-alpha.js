import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom14.css";

import _implicitScopedStylesheets from "./custom14.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M780 330h-60c-13 0-26-6-36-15l-48-41c-10-8-23-14-36-14H483c-15 0-29 6-40 17l-62 51c-5 4-5 12-1 17l19 18c13 10 30 12 43 3l55-33c7-5 17-3 23 3l173 168c4 4 7 10 7 16v45c0 12 9 25 20 25h60c11 0 20-9 20-21V350c0-12-9-20-20-20zM610 510L502 405l-30 18c-15 9-32 14-49 14-21 0-43-8-60-22l-39-32c-9-7-14-15-15-26-2-11-10-17-20-17h-69c-11 0-20 6-20 18v182c0 12 9 20 20 20h40c3 0 7-11 11-16 15-20 37-31 61-34 24-2 47 6 66 23l125 114c11 10 19 21 24 35 3 7 11 9 16 4l47-47c24-24 42-80 20-106zm-251 74a28 28 0 00-42 4c-11 14-9 34 4 46l125 113c6 6 14 8 22 7s15-5 20-12c11-14 9-34-4-46z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5u05i1pvg7r";
freezeTemplate(tmpl);
