import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./overflow.css";

import _implicitScopedStylesheets from "./overflow.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M373 99H158a37 37 0 00-37 37v6c0 3 3 6 6 6h196c21 0 37 17 37 37v221c0 3 3 6 6 6h6c21 0 37-17 37-37V136c1-20-16-37-36-37zm80-79H238a37 37 0 00-37 37v6c0 3 3 6 6 6h196c21 0 37 17 37 37v221c0 3 3 6 6 6h6c21 0 37-17 37-37V57c1-20-16-37-36-37zM326 218c0-20-17-37-37-37H67a37 37 0 00-37 37v245c0 20 17 37 37 37h222c21 0 37-17 37-37V218z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5jef1i2rad5";
freezeTemplate(tmpl);
