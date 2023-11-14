import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./photo.css";

import _implicitScopedStylesheets from "./photo.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M360 310h280c8 0 13-9 8-15l-33-51a60 60 0 00-54-33H439c-23 0-44 13-54 33l-33 51c-5 6 0 15 8 15zm140 180c-44 0-80 36-80 80s36 80 80 80 80-36 80-80-36-80-80-80zm240-120H260c-33 0-60 27-60 60v280c0 33 27 60 60 60h480c33 0 60-27 60-60V430c0-33-27-60-60-60zM500 710c-77 0-140-63-140-140s63-140 140-140 140 63 140 140-63 140-140 140z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-dpd55ar06n";
freezeTemplate(tmpl);
