import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./answer_best.css";

import _implicitScopedStylesheets from "./answer_best.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M495 215c-166 0-300 125-300 280 0 50 14 96 38 137 3 5 4 11 2 16l-28 89c-5 16 10 30 26 25l88-31c6-2 12-1 17 2 46 27 100 42 158 42 166 0 300-125 300-280-1-155-135-280-301-280zm144 218L486 586a29 29 0 01-42 0l-74-74c-6-6-6-15 0-21l21-21c6-6 15-6 21 0l53 53 132-132c6-6 15-6 21 0l21 21c6 6 6 16 0 21z"${3}/><path fill-opacity=".65" d="M1000 1000V620l-380 380zm-42-135l-31 32-1 3 7 45c1 3-3 6-5 4l-38-21h-3l-40 21c-3 1-6-1-5-4l7-45-1-3-31-32c-2-3-1-6 2-7l43-7 3-2 19-41c1-3 5-3 7 0l19 41 3 2 43 7c4 0 4 4 2 7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2nrr9g862hl";
freezeTemplate(tmpl);
