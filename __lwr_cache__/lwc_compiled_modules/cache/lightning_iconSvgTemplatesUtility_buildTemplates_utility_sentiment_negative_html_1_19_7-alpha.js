import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sentiment_negative.css";

import _implicitScopedStylesheets from "./sentiment_negative.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 20a241 241 0 000 482 240 240 0 00240-241A241 241 0 00260 20zm-90 130c17 0 30 18 30 40s-13 40-30 40-30-18-30-40 13-40 30-40zm-30 237c5-61 50-112 121-112 70 0 114 51 119 112zm210-157c-17 0-30-18-30-40s13-40 30-40 30 18 30 40-13 40-30 40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5h8af94ev25";
freezeTemplate(tmpl);
