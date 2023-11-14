import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_transaction_envelope_change_snapshot.css";

import _implicitScopedStylesheets from "./crypto_transaction_envelope_change_snapshot.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M468 209c20-12 44-12 64 0l204 117c20 12 32 33 32 56v236c0 23-12 44-32 55L532 791a64 64 0 01-64 0L264 673a64 64 0 01-33-55V382c0-23 13-44 33-55l204-118zm17 146l-13-13c-4-4-9-4-13 0l-80 80-33-32c-3-3-8-4-12 0l-13 13c-4 3-4 9 0 12v1l45 45c4 3 8 5 13 5s9-2 12-5l94-93c3-3 3-9 0-13zm26 87h158c7 0 13-6 13-12v-25c0-6-6-12-12-12H511c-6 0-12 6-12 12v25c0 6 6 12 12 12zm158 109H476c-7 0-12-5-12-12v-24c0-7 5-12 12-12h195c6 0 12 5 12 12v24c0 7-6 12-12 12zm-291 0h24c7 0 12-5 12-12v-24c0-7-5-12-12-12h-24c-7 0-13 5-13 12v24c0 7 6 12 13 12zm24 110h-24c-7 0-13-6-13-12v-25c0-6 6-12 13-12h24c7 0 12 6 12 12v25c0 6-5 12-12 12zm73 0h195c6 0 12-6 12-12v-25c0-6-6-12-12-12H475c-7 0-12 5-12 12v25c0 6 5 12 12 12z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-46u3b9ae1cd";
freezeTemplate(tmpl);
