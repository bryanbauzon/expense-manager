import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./trending.css";

import _implicitScopedStylesheets from "./trending.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M501 306a12 12 0 01-20 8l-54-54-124 106a34 34 0 01-49 0l-75-85L46 398a11 11 0 01-17 0l-6-6a11 11 0 010-16l132-180a34 34 0 0149 0l75 76 76-88-50-45a13 13 0 019-20h164a24 24 0 0122 24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ngmcivj9of";
freezeTemplate(tmpl);
