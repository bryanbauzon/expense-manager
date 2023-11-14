import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./variation_products.css";

import _implicitScopedStylesheets from "./variation_products.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M739 533a15 15 0 009-15V246a16 16 0 00-17-17h-34a16 16 0 00-17 17v208a90 90 0 0159 79zm-194 1h14a91 91 0 0170-84V246a16 16 0 00-17-17h-67a16 16 0 00-17 17v272a16 16 0 0017 16zM388 229h-17a16 16 0 00-17 17v272a15 15 0 0017 17h17a16 16 0 0017-17V246a17 17 0 00-17-17zm-96 0h-67a16 16 0 00-17 17v272a16 16 0 0017 17h67a16 16 0 0017-17V246a16 16 0 00-17-17zm176 0h-1a16 16 0 00-17 17v272c-1 9 6 16 18 16a16 16 0 0017-17V246a16 16 0 00-17-17zm132 310a49 49 0 0050 50 68 68 0 0014-2l35 64c2 3 5 4 7 2a44 44 0 0117-8 6 6 0 003-7l-37-68a49 49 0 0011-31 50 50 0 00-100 0zm-1 63a5 5 0 00-8 2l-35 66a17 17 0 00-7-1 49 49 0 1034 13l35-64c1-1 0-4-2-6a151 151 0 01-17-10zm152 68a49 49 0 00-49 41h-67a6 6 0 00-5 6v5a68 68 0 01-2 14 5 5 0 005 6h71a50 50 0 0046 30 51 51 0 001-102z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6l172p6qqjk";
freezeTemplate(tmpl);
