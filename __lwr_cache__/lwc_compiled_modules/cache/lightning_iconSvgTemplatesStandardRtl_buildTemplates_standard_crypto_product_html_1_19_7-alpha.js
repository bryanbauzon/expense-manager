import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_product.css";

import _implicitScopedStylesheets from "./crypto_product.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M533 209a66 66 0 00-66 0L265 326a66 66 0 00-34 57v234c0 24 13 45 34 57l202 117c20 12 46 12 66 0l202-117c21-12 34-33 34-57V383c0-24-13-45-33-57zm143 109H324c-7 0-12 5-12 12v13c0 7 5 13 12 13h352c7 0 13-6 13-13v-13c0-7-6-12-13-12zM356 607h-32c-7 0-12-6-12-13V399c0-7 5-12 12-12h32c6 0 12 5 12 12v195c0 7-6 13-12 13zm288-220h32c7 0 12 6 12 12l1 195c0 7-6 13-13 13h-32c-6 0-12-6-12-13V399c0-6 6-12 12-12zM520 607c7 0 12-6 12-13l1-195c0-7-6-12-13-12h-38c-7 0-12 5-12 12v195c0 7 5 13 12 13zm88-13c0 7-6 13-13 13h-12c-7 0-13-6-13-13V399c0-7 6-12 13-12h12c7 0 13 5 13 12zm-176 13c7 0 13-6 13-13V399c0-7-6-12-13-12h-13c-7 0-12 5-12 12v195c0 7 5 13 12 13zm-107 37h352c7 0 13 6 13 13v13c0 6-6 12-13 12H324c-7 0-12-6-12-12v-13c0-7 5-13 12-13z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ddse5nl59v";
freezeTemplate(tmpl);
