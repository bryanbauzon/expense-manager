import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tax_treatment.css";

import _implicitScopedStylesheets from "./tax_treatment.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M644 781h58l4-3 3-5v-5l1-211-1-5a12 12 0 00-7-7l-5-1h-58a12 12 0 00-7 8l-1 5v211l1 5c0 2 1 4 3 5l4 3zm119 0h32l4-3 3-5V553a12 12 0 00-7-7l-5-1h-32a12 12 0 00-7 8l-1 5v211a13 13 0 008 13h5zm-180 0h6c2 0 3-2 4-3s3-3 3-5l1-5V557l-1-6a12 12 0 00-7-7h-11a12 12 0 00-7 7v222l3 5 4 3h6zm-74 0h18a12 12 0 007-7l1-6V557l-1-5a12 12 0 00-7-7l-5-1h-18a12 12 0 00-7 8l-1 5v211l1 6 2 4 5 3zm-114 0h58a12 12 0 007-7V552a12 12 0 00-7-7l-5-1h-58a12 12 0 00-7 8l-1 5v211a13 13 0 008 13zm8-560l164 90c4 3 7 8 7 12v12c0 7-6 13-13 13H216c-8 0-14-6-14-13l1-13c0-4 2-8 6-11l164-90c5-3 10-5 15-5s11 2 15 5zm-48 68c0 18 14 33 33 33s33-15 33-33a33 33 0 00-66 0zm8 324v-57l2-11 3-6V402c0-8-6-14-13-14h-13c-8 0-13 6-13 14v145h-40V402c0-8-6-14-13-14h-14c-7 0-13 6-13 14v145h-6c-22 0-40 18-40 40v13c0 8 6 13 13 13h148zm85-88V401c0-7-6-13-14-13h-13c-7 0-13 6-13 13v124zm39 3l3-1c4-2 8-2 12-2h11a32 32 0 0114 3V401c0-7-6-13-13-13h-13c-7 0-13 6-13 13v127z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5g8e02rv93r";
freezeTemplate(tmpl);
