import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./case_wrap_up.css";

import _implicitScopedStylesheets from "./case_wrap_up.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M372 301h40a9 9 0 0010-10v-30h158v30a9 9 0 0010 10h40a9 9 0 0010-10v-30a60 60 0 00-60-60H422a60 60 0 00-60 60v30a9 9 0 0010 10zm368 60H262a60 60 0 00-60 60v318a60 60 0 0060 60h478a60 60 0 0060-60V421a62 62 0 00-60-60zm-87 161L479 696a34 34 0 01-48 0l-84-84a16 16 0 010-24l24-24a16 16 0 0124 0l60 60 150-150a16 16 0 0124 0l24 24a18 18 0 010 24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-799tpe0n66q";
freezeTemplate(tmpl);
