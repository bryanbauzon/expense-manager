import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_quantity_rules.css";

import _implicitScopedStylesheets from "./product_quantity_rules.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M770 585H565a16 16 0 00-17 16v16a17 17 0 0017 17h205a17 17 0 0016-17v-16a16 16 0 00-16-16zm0 115H565a17 17 0 00-17 16v17a16 16 0 0017 16h205a16 16 0 0016-16v-17a16 16 0 00-16-16zM436 585H230a17 17 0 00-16 16v16a17 17 0 0016 17h206a17 17 0 0016-17v-16a17 17 0 00-16-16zm0 115H230a17 17 0 00-16 16v17a16 16 0 0016 16h206a17 17 0 0016-16v-17a17 17 0 00-16-16zm231-449a130 130 0 10130 130 130 130 0 00-130-130zm65 139a8 8 0 01-8 7H611a8 8 0 01-8-7 113 113 0 010-18 8 8 0 018-7h113a8 8 0 018 7 113 113 0 010 18zM425 289a130 130 0 00-184 184 130 130 0 00184-184zm-5 103a5 5 0 01-5 5h-60a6 6 0 00-6 6v60a6 6 0 01-5 5h-22a5 5 0 01-5-5v-60a5 5 0 00-5-6h-61a5 5 0 01-5-5v-22a6 6 0 015-5h60a5 5 0 006-5v-60a6 6 0 015-5h22a5 5 0 015 5v60a5 5 0 005 5h61a6 6 0 015 5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3jqj3fn9tmg";
freezeTemplate(tmpl);
