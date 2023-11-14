import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_streams.css";

import _implicitScopedStylesheets from "./data_streams.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M417 283h8a109 109 0 01105 109v47l59 59a19 19 0 010 28l-14 14a19 19 0 01-28 0l-18-19v87a50 50 0 0050 50h4a109 109 0 110 60h-8a109 109 0 01-105-109v-90l-21 21a19 19 0 01-28 0l-13-14a19 19 0 010-28l63-63v-43a50 50 0 00-50-50h-4a110 110 0 110-59zm221 406a50 50 0 00100 0 50 50 0 10-100 0zM262 312a50 50 0 00100 0 50 50 0 00-100 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3b38uqapooq";
freezeTemplate(tmpl);
