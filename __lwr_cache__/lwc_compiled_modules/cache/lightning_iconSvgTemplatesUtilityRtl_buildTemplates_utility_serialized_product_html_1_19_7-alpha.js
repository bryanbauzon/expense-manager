import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./serialized_product.css";

import _implicitScopedStylesheets from "./serialized_product.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M476 20H44a24 24 0 00-24 24v95a24 24 0 0024 24h432a24 24 0 0024-23V44a24 24 0 00-24-24zM299 92a40 40 0 01-39 40 40 40 0 1140-42zm177 96H44a24 24 0 00-24 24v95a24 24 0 0024 24h432a24 24 0 0024-24v-95a24 24 0 00-24-24zm-240 71a39 39 0 01-38 40h-2a40 40 0 1140-40zm120 0a39 39 0 01-38 40h-2a40 40 0 1140-40zm120 97H44a24 24 0 00-24 24v96a24 24 0 0024 24h432a24 24 0 0024-24v-96a24 24 0 00-24-24zm-297 71a39 39 0 01-37 40h-2a40 40 0 1140-40zm120 0a39 39 0 01-37 40h-2a40 40 0 1140-40zm120 0a39 39 0 01-37 40h-2a40 40 0 1140-40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1pnqepcqf6j";
freezeTemplate(tmpl);
