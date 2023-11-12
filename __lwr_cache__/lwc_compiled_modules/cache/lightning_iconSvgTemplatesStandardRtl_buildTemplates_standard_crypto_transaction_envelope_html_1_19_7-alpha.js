import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_transaction_envelope.css";

import _implicitScopedStylesheets from "./crypto_transaction_envelope.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M533 209c21-12 46-12 67 0l144 83c21 12 34 34 34 58v167c0 24-13 46-34 58l-144 83a66 66 0 01-67 0l-144-83a66 66 0 01-34-58V350c0-24 13-46 34-58l144-83zm4 230l-55 56-5 2-5-2-55-56c-4-4-1-10 6-10h33a107 107 0 01110-109v41c-35 0-68 34-68 68h32c7 0 11 5 6 10zm173-1h-34a108 108 0 01-111 109v-41c42 0 70-27 70-68h-33c-7 0-10-5-6-9l55-57 5-1 4 1 56 57c4 3 1 9-6 9z"${3}/><path d="M256 425l42-24v149c0 24 13 46 33 58l202 117c11 6 22 9 33 9l-99 57a66 66 0 01-67 0l-144-83a66 66 0 01-34-58V483c0-24 13-46 34-58z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5v74gcg1evh";
freezeTemplate(tmpl);
