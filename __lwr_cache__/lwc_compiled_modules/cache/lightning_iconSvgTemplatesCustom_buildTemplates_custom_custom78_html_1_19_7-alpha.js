import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom78.css";

import _implicitScopedStylesheets from "./custom78.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M783 293l-180-90c-8-4-18-4-27 0l-166 83-167-83c-9-5-20-4-29 1-9 6-14 16-14 26v450c0 11 6 22 17 27l180 90c8 4 18 4 27 0l166-83 167 83c4 2 9 3 13 3 5 0 11-2 16-4 9-6 14-16 14-26V320c0-11-6-22-17-27zm-43 58v237c0 14-14 24-27 19-46-18-10-95-43-137-31-39-72 1-110-60-37-59 13-101 57-124 6-3 12-3 18 0l93 47c8 3 12 10 12 18zM485 699c-7 4-16 3-22-3a64 64 0 01-23-46c0-30-50-20-50-80 0-48-59-62-108-57-12 1-22-8-22-20V311c0-15 16-25 29-18l108 54 3 1 4 2c45 26 36 48 17 80-21 36-30 0-60-10s-60 10-50 30 40 0 60 20 20 50 80 30 70-10 90 10 30 60 0 90c-18 18-25 54-33 80-2 5-5 10-10 13z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6cm7dgjt28o";
freezeTemplate(tmpl);
