import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./color_swatch.css";

import _implicitScopedStylesheets from "./color_swatch.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M35.4 9.5l7.1 7a4 4 0 010 5.7L24 40.7V15.3l5.8-5.8a4 4 0 015.6 0zM50 36v10a4 4 0 01-4 4H21l18-18h7a4 4 0 014 4zM2 41V6a4 4 0 014-4h10a4 4 0 014 4v35a9 9 0 01-18 0zm9 4a4 4 0 100-8 4 4 0 000 8z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-3gq55mod2b8";
freezeTemplate(tmpl);
