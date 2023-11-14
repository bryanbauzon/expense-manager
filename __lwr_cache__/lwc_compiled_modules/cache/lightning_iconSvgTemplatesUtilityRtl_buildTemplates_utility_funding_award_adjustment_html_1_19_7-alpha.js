import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./funding_award_adjustment.css";

import _implicitScopedStylesheets from "./funding_award_adjustment.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M208 270v152c0 4 3 6 7 6h3c30-17 91-63 91-65 0-19 5-32 8-40a120 120 0 0126-39l15-13v-80c0-5-3-7-6-7h-4l-134 76c-3 2-6 6-6 10zm-13-40l135-77c3-2 4-5 2-9l-2-1-122-68a40 40 0 00-39 0L47 145c-3 1-3 5-1 8l2 2 135 74c4 2 9 2 13 0zm-30 32L28 185a6 6 0 00-8 3v138c0 13 7 26 20 32l121 68c3 2 7 0 9-3V272c0-4-3-9-7-10z"${3}/><path fill-rule="evenodd" d="M500 361a88 88 0 11-176 1 88 88 0 01176 0zm-35-56h-33c-3 0-3 3-2 4l11 12-20 22v4l9 10h4l20-23 10 12c2 2 4 1 4-1v-37l-3-3zm-70 113h-35c-1 0-3-2-3-4v-36c0-2 2-3 4 0l12 10 20-20c2-2 4-2 5 0l10 8v4l-22 22 12 12c2 1 0 4-2 4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-vb4cbspaml";
freezeTemplate(tmpl);
