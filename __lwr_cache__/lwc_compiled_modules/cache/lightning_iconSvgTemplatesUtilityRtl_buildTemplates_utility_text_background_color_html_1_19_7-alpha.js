import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./text_background_color.css";

import _implicitScopedStylesheets from "./text_background_color.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M259 160l43 100h-90l39-100h8zm221-80v360a40 40 0 01-40 40H80a40 40 0 01-40-40V80a40 40 0 0140-40h360a40 40 0 0140 40zm-55 327L305 110c-3-6-8-10-15-10h-71c-6 0-12 4-14 10L95 407c-2 6 2 13 9 13h41c6 0 12-5 14-11l32-89h134l35 89c2 6 8 11 14 11h41c7 0 12-7 10-13z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4tn49l0cpan";
freezeTemplate(tmpl);
