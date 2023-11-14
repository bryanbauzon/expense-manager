import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./partner_fund_claim.css";

import _implicitScopedStylesheets from "./partner_fund_claim.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M565 340h94c7 0 13-6 13-13l-3-9-118-115-9-3c-7 0-13 6-13 13v92c1 19 17 35 36 35zM386 650c0-35 20-66 52-78 26-10 52-16 80-16 40 0 74 11 105 20 17 5 33 10 48 13l2-180c0-9-8-17-17-17H530c-30 0-52-24-52-52V217c0-9-8-17-18-17H282c-29 0-52 24-52 52v420c0 29 24 52 52 52h104zm338-1c-91 28-163-58-262-17-8 3-12 10-12 18v104c0 14 12 22 24 18 99-30 170 56 263 17 7-3 13-10 13-18V668c0-13-13-22-26-19zm-121 97a39 39 0 1139-39c0 22-17 39-39 39z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-34elibn8i4g";
freezeTemplate(tmpl);
