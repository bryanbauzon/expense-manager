import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom80.css";

import _implicitScopedStylesheets from "./new_custom80.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M97 337a76.5 76.5 0 100 153c42 0 77-34 77-77s-34-76-77-76zm0 107c-17 0-31-14-31-31s14-31 31-31 31 14 31 31-14 31-31 31zm326-107c-43 0-77 34-77 77s34 76 77 76a76.5 76.5 0 100-153zm0 107c-17 0-31-14-31-31s14-31 31-31 31 14 31 31-14 31-31 31zm-5-153c17-1 33 2 49 8 8 3 16-1 20-8 39-74-24-109-64-129-11-5-23 2-23 14v44c0 9-6 18-15 17-57-9-108-69-170-69s-70 61-70 61c-43 0-86-3-105-8-11-1-20 6-20 16 0 0 0 54 77 54 63 0 116 46 123 109 2 17 0 34-5 48-2 5 2 11 9 11h71c6 0 10-5 9-11-5-15-6-30-5-46 6-60 57-109 119-111zM224 118c1 6 5 11 11 13l82 28c8 2 15-1 19-8l7-13c3-5-1-11-6-12-24-2-74-11-60-38 13-23 40-17 58-9 7 3 14-5 11-11a67 67 0 00-67-37c-36 4-62 39-57 75z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-q4v16vln95";
freezeTemplate(tmpl);
