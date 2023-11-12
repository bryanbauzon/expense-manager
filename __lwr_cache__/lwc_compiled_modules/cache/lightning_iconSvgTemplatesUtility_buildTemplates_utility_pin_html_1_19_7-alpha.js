import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pin.css";

import _implicitScopedStylesheets from "./pin.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M495 154L360 19c-14-14-36-14-50 0s-14 36 0 50l7 7-162 107-5-5c-14-14-36-14-50 0s-14 36 0 50l72 72L24 448a36 36 0 000 51 36 36 0 0051 0l148-149 63 63a35 35 0 0050 0 35 35 0 000-50l-5-5 106-163 7 7a35 35 0 0050 0c14-12 14-34 1-48z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-hmfbr2pg2";
freezeTemplate(tmpl);
