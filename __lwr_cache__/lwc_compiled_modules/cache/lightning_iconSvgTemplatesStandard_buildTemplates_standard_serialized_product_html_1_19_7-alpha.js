import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./serialized_product.css";

import _implicitScopedStylesheets from "./serialized_product.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M770 200H230a30 30 0 00-30 30v119a30 30 0 0030 30h540a30 30 0 0030-30V230a30 30 0 00-30-30zm-221 90a49 49 0 01-49 49 50 50 0 1149-51zm221 120H230a30 30 0 00-30 30v119a30 30 0 0030 30h540a30 30 0 0030-30V440a30 30 0 00-30-30zm-301 89a48 48 0 01-49 50 50 50 0 1149-51zm150 0a48 48 0 01-49 50 50 50 0 1149-51zm151 121H230a30 30 0 00-30 30v120a30 30 0 0030 30h540a30 30 0 0030-30V650a30 30 0 00-30-30zm-371 89a48 48 0 01-49 50 50 50 0 1149-51zm150 0a48 48 0 01-49 50 50 50 0 1149-51zm150 0a48 48 0 01-49 50 50 50 0 1149-51z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-38pqottgol1";
freezeTemplate(tmpl);
