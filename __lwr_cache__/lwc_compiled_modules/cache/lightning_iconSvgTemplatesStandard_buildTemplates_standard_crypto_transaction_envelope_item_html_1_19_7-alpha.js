import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_transaction_envelope_item.css";

import _implicitScopedStylesheets from "./crypto_transaction_envelope_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M532 209a64 64 0 00-64 0L264 326a64 64 0 00-33 56v236c0 23 13 44 33 55l204 118c20 12 44 12 64 0l204-118c20-11 32-32 32-55V382c0-23-12-44-32-55zM392 578l70-72c5-5 1-12-8-12h-41c0-43 42-86 86-86v-52a136 136 0 00-139 138h-42c-9 0-13 8-8 12l70 72 6 2zm247-72h43c9 0 13-8 8-12l-71-72-6-2-6 2-70 72c-5 5-1 12 8 12h42c0 52-36 86-88 86v52a139 139 0 00130-85c7-17 10-35 10-53z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7tfps440780";
freezeTemplate(tmpl);
