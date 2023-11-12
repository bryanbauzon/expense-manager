import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./topic2.css";

import _implicitScopedStylesheets from "./topic2.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M492 133h-65l28-107v-2c0-4-3-8-8-8h-52c-4 0-7 3-8 7l-28 111H229l28-107v-3c0-4-3-8-8-8h-52c-4 0-7 3-8 7l-29 110H88c-4 0-7 2-8 6l-13 49v2c0 4 3 8 8 8h68l-32 125H41c-4 0-7 2-8 6l-13 47v2c0 4 3 8 8 8h66L66 495v2c0 4 3 8 8 8h52c4 0 7-2 8-7l29-112h129l-28 108v2c0 4 3 8 8 8h52c4 0 7-2 8-7l28-112h71c4 0 7-2 8-7l13-49v-2c0-4-3-8-8-8h-67l33-125h69c4 0 7-2 8-7l13-49v-2s-4-3-8-3zM309 323H180l32-125h129z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2o5p1549fd2";
freezeTemplate(tmpl);
