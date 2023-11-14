import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_wallet.css";

import _implicitScopedStylesheets from "./crypto_wallet.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M532 210a64 64 0 00-64 0l-66 38a64 64 0 00-32 55v76c0 23 12 44 32 56l66 38c20 11 44 11 64 0l66-38c20-12 32-33 32-56v-76c0-23-12-44-32-55zM264 392h69v8c0 23 12 44 32 56h-69a32 32 0 100 64h440c35 0 64 29 64 65v150c0 35-29 64-64 64H264c-35 0-64-29-64-64V456c0-35 29-64 64-64zm472 64H632h1c21-12 34-33 34-57v-7h4c36 0 65 29 65 64z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7qj949293lh";
freezeTemplate(tmpl);
