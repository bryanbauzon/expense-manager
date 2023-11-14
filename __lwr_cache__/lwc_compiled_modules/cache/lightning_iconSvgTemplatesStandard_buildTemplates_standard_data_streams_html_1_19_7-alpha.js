import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_streams.css";

import _implicitScopedStylesheets from "./data_streams.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M688 203a109 109 0 11-105 139h-4a50 50 0 00-50 50v43l63 63a19 19 0 010 28l-13 14a19 19 0 01-28 0l-21-21v90a109 109 0 01-105 109h-8a109 109 0 11-105-139 110 110 0 01105 79h4a50 50 0 0050-50v-87l-18 19a19 19 0 01-28 0l-14-14a19 19 0 010-28l59-59v-47a109 109 0 01105-109h8a108 108 0 01105-80zM312 639a50 50 0 1050 50 50 50 0 00-50-50zm376-377a50 50 0 1050 50 50 50 0 00-50-50z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2nt7ui6mp3p";
freezeTemplate(tmpl);
