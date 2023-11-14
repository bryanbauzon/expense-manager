import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./serialized_product_transaction.css";

import _implicitScopedStylesheets from "./serialized_product_transaction.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M261 361h469a27 27 0 0026-26V226a27 27 0 00-26-26H261a27 27 0 00-26 26v109a27 27 0 0026 26zm234-126a44 44 0 11-43 44 44 44 0 0143-44zM261 543h469a26 26 0 0026-27V409a27 27 0 00-26-26H261a26 26 0 00-26 27v106a27 27 0 0026 27zm252-80a44 44 0 110 1zm-130 0a44 44 0 110 1zm379 250l-8-8-64-64a9 9 0 00-13 0l-13 13a9 9 0 00-3 7 11 11 0 003 7l22 23a6 6 0 011 7 7 7 0 01-6 4h-75a10 10 0 00-10 9v19a11 11 0 0010 9h76a8 8 0 016 4 9 9 0 01-1 7l-22 23a9 9 0 000 13l13 13a9 9 0 0013 0l72-71a12 12 0 00-1-15zm-125-38a32 32 0 01-3-14 36 36 0 0111-26l13-13a35 35 0 0149-2l2 2 47 49v-80a26 26 0 00-26-27H261a26 26 0 00-26 27v106a27 27 0 0026 27h309v-15a36 36 0 0136-34zm-229-32a44 44 0 110-1zm130 0a44 44 0 01-43 45 45 45 0 01-46-43 45 45 0 0143-46 45 45 0 0146 43z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-77jbmrgtqks";
freezeTemplate(tmpl);
