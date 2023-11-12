import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./italic.css";

import _implicitScopedStylesheets from "./italic.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M380 123v-13a20 20 0 00-20-20H220a20 20 0 00-20 20v20c0 11 9 20 20 20 17 0 30 16 26 32l-36 176a27 27 0 01-26 22h-24a20 20 0 00-20 20v20c0 11 9 20 20 20h140a20 20 0 0020-20v-20a20 20 0 00-20-20c-17 0-30-16-26-32l36-176a27 27 0 0126-22h17c15 0 27-12 27-27z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1lp8am3stgn";
freezeTemplate(tmpl);
