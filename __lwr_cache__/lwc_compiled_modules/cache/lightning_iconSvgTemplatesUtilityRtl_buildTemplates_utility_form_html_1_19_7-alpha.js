import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./form.css";

import _implicitScopedStylesheets from "./form.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M364 148h85a11 11 0 0011-11 10 10 0 00-3-8L351 23a10 10 0 00-8-3 11 11 0 00-11 11v85a32 32 0 0032 32zm80 48H332a48 48 0 01-48-48V36a16 16 0 00-16-16H108a48 48 0 00-48 48v384a48 48 0 0048 48h304a48 48 0 0048-48V212a16 16 0 00-16-16zm-320-16a16 16 0 0116-15h66a16 16 0 0115 15v16a16 16 0 01-16 16h-65a16 16 0 01-16-16zm240 208a16 16 0 01-16 16H140a16 16 0 01-16-16v-16a16 16 0 0116-16h208a16 16 0 0116 16zm32-96a16 16 0 01-16 16H140a16 16 0 01-16-16v-16a16 16 0 0116-16h240a16 16 0 0116 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7091i8kh18b";
freezeTemplate(tmpl);
