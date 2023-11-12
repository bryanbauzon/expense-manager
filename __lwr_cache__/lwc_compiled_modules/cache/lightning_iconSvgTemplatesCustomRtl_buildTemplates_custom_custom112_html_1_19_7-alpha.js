import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom112.css";

import _implicitScopedStylesheets from "./custom112.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M511 502a567 567 0 00-257 0 73 73 0 00-50 65v52a72 72 0 0050 65l24 5 66 96c12 17 22 14 22-7v-79c49 1 98-3 145-15a73 73 0 0050-65v-52c-1-30-21-56-50-65zm236-277a722 722 0 00-351 0 73 73 0 00-50 66v93a73 73 0 0050 66c64 16 130 23 196 21v109c0 21 10 25 21 7l90-128a670 670 0 0043-9 73 73 0 0050-66v-93a72 72 0 00-49-65v-1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1b5dassgieq";
freezeTemplate(tmpl);
