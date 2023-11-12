import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./arrowup.css";

import _implicitScopedStylesheets from "./arrowup.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M414 210c8-8 8-19 0-27L264 36a20 20 0 00-28 0L86 183c-8 8-8 19 0 27l28 27c8 8 20 8 28 0l47-46c8-8 22-2 22 9v270c0 10 9 20 20 20h40c11 0 20-11 20-20V200c0-12 14-17 22-9l47 46c8 8 20 8 28 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5v32sfcmil9";
freezeTemplate(tmpl);
