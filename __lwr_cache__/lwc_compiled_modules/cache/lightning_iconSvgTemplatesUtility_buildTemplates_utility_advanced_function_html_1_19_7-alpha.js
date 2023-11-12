import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./advanced_function.css";

import _implicitScopedStylesheets from "./advanced_function.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M430 69V40c0-8-7-15-15-15H118c-8 0-15 7-15 15v31c0 3 0 7 3 10l146 179-146 179c-2 3-3 6-3 10v31c0 8 7 15 15 15h297c8 0 15-7 15-15v-29c0-8-7-15-15-15H184l133-163c3-4 4-8 4-14 0-5-2-10-5-14L184 84h231c8 0 15-7 15-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1cs3g7t9cr";
freezeTemplate(tmpl);
