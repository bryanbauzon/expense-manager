import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./setup.css";

import _implicitScopedStylesheets from "./setup.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M468 324l-37-31a195 195 0 000-68l37-31c12-10 16-28 8-42l-16-29a34 34 0 00-40-14l-45 17a173 173 0 00-58-34l-8-47c-3-16-17-25-33-25h-32c-16 0-30 9-33 25l-8 46c-22 7-41 19-59 34l-44-17-11-2c-12 0-23 6-29 16l-16 28c-8 14-5 32 8 42l37 31a195 195 0 000 68l-37 31a34 34 0 00-8 42l16 30a34 34 0 0040 14l45-17c18 16 38 27 58 34l8 48a33 33 0 0033 27h32c16 0 30-12 33-28l8-48c23-8 43-20 61-37l42 17 12 2c12 0 23-6 29-16l15-26c8-12 4-30-8-40zm-207 47a110 110 0 01-109-110 109 109 0 11218 0 110 110 0 01-109 110zm29-191h-46c-7 0-13 4-15 10l-28 72c-2 5 2 11 8 11h47l-17 60c-2 6 5 9 9 5l71-83c5-5 1-13-6-13h-35l31-49c3-5-1-12-7-12h-12z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3o0k4f9g7o";
freezeTemplate(tmpl);
