import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./problem.css";

import _implicitScopedStylesheets from "./problem.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M375 300h40a9 9 0 0010-10v-30h140v30a9 9 0 0010 10h40a9 9 0 0010-10v-30a60 60 0 00-60-60H425a60 60 0 00-60 60v30a9 9 0 0010 10zm360 60H255a60 60 0 00-60 60v320a60 60 0 0060 60h480a60 60 0 0060-60V420a60 60 0 00-60-60zM513 742a10 10 0 01-10 10h-33a10 10 0 01-10-10v-34a11 11 0 0110-10h33a10 10 0 0110 10zm10-107a15 15 0 00-10 14v10a10 10 0 01-11 10h-33a9 9 0 01-9-9v-10a70 70 0 0145-65 50 50 0 0021-15 56 56 0 00-37-93 53 53 0 00-40 15 50 50 0 00-15 31 10 10 0 01-10 8h-33a10 10 0 01-10-12 116 116 0 0132-69 106 106 0 0177-31 109 109 0 01103 107 112 112 0 01-70 109z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4q83abstjbp";
freezeTemplate(tmpl);
