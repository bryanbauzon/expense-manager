import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_transfer_state.css";

import _implicitScopedStylesheets from "./product_transfer_state.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M467 205a17 17 0 0125 0l135 130a16 16 0 010 24L492 491a17 17 0 01-25 0l-25-24a16 16 0 011-24l42-42a11 11 0 00-9-19H248a19 19 0 01-18-17v-35a19 19 0 0118-17h228a11 11 0 009-19l-42-41a16 16 0 010-24zm-72 306a17 17 0 00-25 0L235 641a16 16 0 000 24l135 130a17 17 0 0025 0l25-24a16 16 0 000-25l-42-41a11 11 0 018-19h108a156 156 0 01-4-36 162 162 0 013-33H386a11 11 0 01-9-19l43-41a16 16 0 000-24zm135 139a120 120 0 11120 120 120 120 0 01-120-120zm195-28l-80 81a15 15 0 01-22 0l-39-39a7 7 0 010-11l11-11a7 7 0 0111 0l28 28 69-69a7 7 0 0111 0l10 11a7 7 0 011 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1brclpkrtqr";
freezeTemplate(tmpl);
