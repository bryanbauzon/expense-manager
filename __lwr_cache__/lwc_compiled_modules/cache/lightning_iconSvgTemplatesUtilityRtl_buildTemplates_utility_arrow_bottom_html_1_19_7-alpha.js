import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./arrow_bottom.css";

import _implicitScopedStylesheets from "./arrow_bottom.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M423 418a20 20 0 0120 20v42a20 20 0 01-20 20H97a20 20 0 01-20-20v-41a20 20 0 0120-20zM280 20a21 21 0 0120 20v174a13 13 0 0023 10l48-48a20 20 0 0128 0l30 28a19 19 0 010 27L274 381a20 20 0 01-29 0L92 231a19 19 0 010-27l28-28a20 20 0 0129 0l48 47a13 13 0 0022-9V40a22 22 0 0121-20h40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-41qom5sakcn";
freezeTemplate(tmpl);
