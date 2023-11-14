import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./filter_criteria.css";

import _implicitScopedStylesheets from "./filter_criteria.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M389 320h218a20 20 0 0020-20v-40a60 60 0 00-60-60H428a60 60 0 00-59 60v40a20 20 0 0020 20zm-90-70a9 9 0 0110 10v40a80 80 0 0080 80h218a80 80 0 0079-80v-40a9 9 0 0110-10h20a60 60 0 0160 60v430a60 60 0 01-60 60H280a60 60 0 01-60-60V310a60 60 0 0160-60h20zm313 230H389a9 9 0 00-7 14l97 114a21 21 0 015 13v72a8 8 0 008 8h15a7 7 0 007-8v-72a18 18 0 016-13l98-114a9 9 0 00-6-14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6d1tqf0h2gi";
freezeTemplate(tmpl);
