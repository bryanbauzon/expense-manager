import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_product_category_wallet_role.css";

import _implicitScopedStylesheets from "./crypto_product_category_wallet_role.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M468 210c20-12 44-12 64 0l66 38c20 11 32 32 32 55v76c0 23-12 44-32 56l-66 38a64 64 0 01-64 0l-66-38a64 64 0 01-32-56v-76c0-23 12-44 32-55z"${3}/><path fill-rule="evenodd" d="M333 392h-69c-35 0-64 29-64 64v279c0 35 29 64 64 64h472c35 0 64-29 64-64V585c0-36-29-65-64-65H296a32 32 0 110-64h69a64 64 0 01-32-56zm185 286c4 1 11 3 17 3 40 2 72-28 70-68 0-4-1-12-3-17 1-3-4-3-5-2l-36 36c-3 3-7 3-10 0l-25-24c-3-2-3-7 0-9l38-36c1-3 1-6-2-6l-17-2c-37 0-68 34-65 72 0 6 1 10 3 14v3l-82 82c-8 11-8 27 0 36 4 5 10 7 17 7 5 0 12-2 18-7z"${3}/><path d="M632 456h104c0-35-29-64-65-64h-4v7c0 23-13 45-34 56z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6lipb34elb2";
freezeTemplate(tmpl);
