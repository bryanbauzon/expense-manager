import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quotation_marks.css";

import _implicitScopedStylesheets from "./quotation_marks.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M443 65c-90 0-159 70-159 160v215c0 8 7 15 15 15h170c8 0 15-7 15-15V270c0-8-7-15-15-15H344v-30c0-50 49-100 99-100h26c8 0 15-7 15-15V80c0-8-7-15-15-15zm-248 0c-90 0-159 70-159 160v215c0 8 7 15 15 15h170c8 0 15-7 15-15V270c0-8-7-15-15-15H96v-30c0-50 49-100 99-100h26c8 0 15-7 15-15V80c0-8-7-15-15-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4pje9g2jjlt";
freezeTemplate(tmpl);
