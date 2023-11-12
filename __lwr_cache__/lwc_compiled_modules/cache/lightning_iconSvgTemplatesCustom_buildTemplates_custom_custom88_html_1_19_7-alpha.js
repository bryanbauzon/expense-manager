import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom88.css";

import _implicitScopedStylesheets from "./custom88.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M781 700H219c-10 0-19 8-19 18v1c0 45 56 81 100 81h400c44 0 100-36 100-81v-1c0-10-9-18-19-18zm-551-60h180c11 0 20-11 20-22V274c0-5-7-7-9-2L221 624c-3 7 1 16 9 16zm280 0h250c12 0 21-11 20-23-9-72-21-296-276-416-6-3-14 1-14 9v408c0 11 9 22 20 22z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7o9d3aeauqa";
freezeTemplate(tmpl);
