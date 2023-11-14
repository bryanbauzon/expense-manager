import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tax_rate.css";

import _implicitScopedStylesheets from "./tax_rate.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M405 200l162 89c4 3 6 8 6 12v12c1 7-5 13-13 13H219c-7 0-13-6-13-13v-12c0-5 3-9 7-12l162-89a25 25 0 0130 0zm-48 67c0 19 14 33 33 33s33-15 33-33a33 33 0 10-66 0zm92 233V379c0-7-6-13-13-13h-13c-8 0-13 6-13 13v144h-40V379c0-7-6-13-13-13h-13c-7 0-13 6-13 13v144h-39V379c0-7-6-13-14-13h-13c-7 0-13 6-13 13v144h-6c-22 0-40 18-40 40v13c0 7 6 13 13 13h211a99 99 0 0119-89zm79-35v-86c0-7-6-13-13-13h-14c-7 0-13 6-13 13v93c12-5 24-7 37-7h3zm30 327l-2 2-3 1h-22a6 6 0 01-5-3l-1-3 1-3 160-294 2-2 3-1h24l3 4c1 2 0 3-1 4L558 792zm161-107a32 32 0 0132 39 32 32 0 01-26 25c-6 1-12 0-18-2s-11-7-15-12-5-11-5-18a32 32 0 0132-32zm0-43a76 76 0 00-69 46 77 77 0 00-5 44 75 75 0 00103 55 75 75 0 0033-28c9-13 13-27 13-42a76 76 0 00-22-53 75 75 0 00-53-22zM526 535c7 0 13 2 18 5s10 9 12 15 3 12 2 19a32 32 0 01-26 25c-6 1-12 0-18-2s-11-7-15-12-5-11-5-18a32 32 0 0132-32zm0-43a75 75 0 00-69 46 74 74 0 00-5 44c3 14 10 28 21 38a76 76 0 0038 21c15 3 30 1 44-4a74 74 0 0034-28 75 75 0 0012-42 75 75 0 00-75-75z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7p2ihjv9ln7";
freezeTemplate(tmpl);
