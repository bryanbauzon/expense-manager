import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./wellness.css";

import _implicitScopedStylesheets from "./wellness.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M274 106a17 17 0 00-12-6 17 17 0 00-13 6c-117 134-50 240 0 290a17 17 0 0012 5 18 18 0 0013-5c49-51 114-157 0-290zM157 283a195 195 0 00-111-20 13 13 0 00-10 5 13 13 0 00-3 10c30 140 130 148 188 140a14 14 0 006-3 231 231 0 01-70-132zm206 0a190 190 0 01111-20 13 13 0 0110 5 13 13 0 013 10c-30 140-130 148-188 140a14 14 0 01-6-3 231 231 0 0070-132zm-209-33c3-46 12-66 16-73a227 227 0 00-64-35 13 13 0 00-11 0 13 13 0 00-7 10 216 216 0 00-2 84 230 230 0 0168 14zm279-99a13 13 0 00-17-9 228 228 0 00-64 34 180 180 0 0116 74 230 230 0 0168-15 213 213 0 00-3-84z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1g506dgh2ct";
freezeTemplate(tmpl);
