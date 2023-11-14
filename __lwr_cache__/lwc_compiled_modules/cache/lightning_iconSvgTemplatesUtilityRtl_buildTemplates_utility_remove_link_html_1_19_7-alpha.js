import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./remove_link.css";

import _implicitScopedStylesheets from "./remove_link.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M240 366c-6 0-12-1-18-3-6-1-13-3-19-5-4-1-8 0-10 2l-4 4a69.2 69.2 0 01-93 5 66.9 66.9 0 01-3-98l66-66c9-9 19-14 30-17 14-4 29-3 42 3 8 3 16 8 22 15 3 3 6 7 9 12 3 6 11 7 16 2l25-25c4-4 4-9 1-13-4-5-8-9-12-14-6-6-14-12-21-17-13-8-26-13-41-16a125 125 0 00-109 33l-64 64c-46 46-50 121-5 169 47 50 126 52 174 3l22-22c5-5 1-15-8-16zm165-141c48-48 47-127-3-174-48-44-123-41-169 5l-20 20c-6 6-2 16 6 17 12 1 25 3 37 7 4 1 8 0 10-2l4-4c25-25 66-28 93-5 29 26 31 71 3 98l-66 66c-9 9-19 14-30 17-14 4-29 3-42-3-8-3-16-8-22-15-3-3-6-7-8-11-3-6-11-7-16-2l-24 24c-4 4-4 9-1 13 4 5 7 9 12 14 7 7 14 12 21 17 13 8 26 13 41 16a125 125 0 00109-33zm46 185l46-46c4-4 4-10 0-14l-28-28c-4-4-10-4-14 0l-45 47-43-43c-4-4-10-4-14 0l-28 28c-4 4-4 10 0 14l43 43-42 42c-4 4-4 10 0 14l28 28c4 4 10 4 14 0l42-42 45 45c4 4 10 4 14 0l28-28c4-4 4-10 0-14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1stspnk8t5r";
freezeTemplate(tmpl);
