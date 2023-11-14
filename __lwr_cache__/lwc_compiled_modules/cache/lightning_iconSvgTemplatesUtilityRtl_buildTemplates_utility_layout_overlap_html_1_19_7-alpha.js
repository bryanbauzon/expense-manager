import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./layout_overlap.css";

import _implicitScopedStylesheets from "./layout_overlap.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M53 48a28 28 0 0127-28h217a28 28 0 0128 28v52H203a42 42 0 00-42 42v226a42 42 0 0043 43h122v60a28 28 0 01-28 29H80a28 28 0 01-28-28zm150 76a19 19 0 00-18 18v226a19 19 0 0019 20h244a19 19 0 0020-20V142a19 19 0 00-20-18z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-58jbh41p3th";
freezeTemplate(tmpl);
