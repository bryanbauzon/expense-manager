import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_wallet_group_item.css";

import _implicitScopedStylesheets from "./crypto_wallet_group_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M468 209c20-12 44-12 64 0l66 38c20 11 32 32 32 55v77c0 23-12 44-32 55l-66 38a65 65 0 01-64 0l-66-38a64 64 0 01-32-56v-75c0-23 12-45 32-56zm-54 125c-5 5-5 13 0 18l54 55c5 5 13 5 18 0l100-101c5-5 5-13 0-18l-14-14c-5-5-13-5-18 0l-68 69c-5 5-13 5-18 0l-22-23c-5-5-13-5-18 0l-14 13zm-82 58h-68c-36 0-65 28-65 64v280c0 35 29 64 65 64h472c36 0 65-29 65-64V585c0-36-29-64-65-64H296a32.5 32.5 0 110-65h69a64 64 0 01-33-56zm300 64h105c0-35-29-64-65-64h-4v6c0 24-14 46-35 57z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-63spaqul2b5";
freezeTemplate(tmpl);
