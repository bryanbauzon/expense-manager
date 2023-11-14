import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./question_feed.css";

import _implicitScopedStylesheets from "./question_feed.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 220c-166 0-300 125-300 280 0 50 14 96 38 137 3 5 4 11 2 16l-28 89c-5 16 10 30 26 25l88-31c6-2 12-1 17 2 46 27 100 42 158 42 166 0 300-125 300-280-1-155-135-280-301-280zm30 450c0 11-9 20-20 20h-20c-11 0-20-9-20-20v-20c0-11 9-20 20-20h20c11 0 20 9 20 20zm8-127c-4 1-8 5-8 10v16c0 11-9 21-20 21h-20c-11 0-20-10-20-21v-16c0-30 20-57 49-67 11-4 21-9 27-18 34-45 0-97-45-98-16-1-32 6-44 17-8 8-14 18-16 28-2 9-10 16-19 16h-21c-12 0-22-12-20-24 5-24 16-46 34-63 23-23 54-35 87-34 63 2 115 54 117 117 2 52-30 99-81 116z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2nm0c1m4baj";
freezeTemplate(tmpl);
