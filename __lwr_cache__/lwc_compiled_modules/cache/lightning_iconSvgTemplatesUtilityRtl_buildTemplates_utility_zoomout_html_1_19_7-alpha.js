import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./zoomout.css";

import _implicitScopedStylesheets from "./zoomout.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M190 250h120c6 0 10-4 10-10v-40c0-6-4-10-10-10H190m0 0h-60c-6 0-10 4-10 10v40c0 6 4 10 10 10h60m306 203L381 338A200 200 0 00220 20C110 20 20 110 20 220a200 200 0 00318 161l115 115c6 6 15 6 21 0l21-21c6-6 6-16 1-22zm-276-93c-77 0-140-63-140-140S143 80 220 80s140 63 140 140-63 140-140 140z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2todf5fupbc";
freezeTemplate(tmpl);
