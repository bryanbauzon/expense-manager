import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./freeze_column.css";

import _implicitScopedStylesheets from "./freeze_column.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M145 440a15 15 0 0115 15v30a15 15 0 01-15 15H55a15 15 0 01-15-15v-30a15 15 0 0115-15zm196 0c6 0 11 7 11 15v30c0 8-5 15-11 15h-66c-6 0-11-7-11-15v-30c0-8 5-15 11-15zm128 0c6 0 11 7 11 15v30c0 8-5 15-11 15h-66c-6 0-11-7-11-15v-30c0-8 5-15 11-15zM216 140a8 8 0 018 8v344a8 8 0 01-8 8h-8a8 8 0 01-8-8V148a8 8 0 018-8zm-71 200a15 15 0 0115 15v30a15 15 0 01-15 15H55a15 15 0 01-15-15v-30a15 15 0 0115-15zm196 0c6 0 11 7 11 15v30c0 8-5 15-11 15h-66c-6 0-11-7-11-15v-30c0-8 5-15 11-15zm128 0c6 0 11 7 11 15v30c0 8-5 15-11 15h-66c-6 0-11-7-11-15v-30c0-8 5-15 11-15zM145 240a15 15 0 0115 15v30a15 15 0 01-15 15H55a15 15 0 01-15-15v-30a15 15 0 0115-15zm196 0c6 0 11 7 11 15v30c0 8-5 15-11 15h-66c-6 0-11-7-11-15v-30c0-8 5-15 11-15zm128 0c6 0 11 7 11 15v30c0 8-5 15-11 15h-66c-6 0-11-7-11-15v-30c0-8 5-15 11-15zM145 140a15 15 0 0115 15v30a15 15 0 01-15 15H55a15 15 0 01-15-15v-30a15 15 0 0115-15zm196 0c6 0 11 7 11 15v30c0 8-5 15-11 15h-66c-6 0-11-7-11-15v-30c0-8 5-15 11-15zm128 0c6 0 11 7 11 15v30c0 8-5 15-11 15h-66c-6 0-11-7-11-15v-30c0-8 5-15 11-15zm-4-120a15 15 0 0115 15v50a15 15 0 01-15 15H55a15 15 0 01-15-15V35a15 15 0 0115-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3kddk5vdseq";
freezeTemplate(tmpl);
