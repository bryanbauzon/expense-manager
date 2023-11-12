import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./orders.css";

import _implicitScopedStylesheets from "./orders.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M490 357l-28-14c-4-2-10-2-14 0l-172 82c-10 4-22 4-31 0L72 343c-4-2-10-2-14 0l-28 14a16 16 0 000 30l214 100c10 6 22 6 31 0l215-100c13-7 13-25 0-30zm0-112l-30-15c-3-2-9-2-13 0l-171 82c-10 4-22 4-31 0L73 230c-4-2-10-2-14 0l-30 14a16 16 0 000 30l215 102c10 4 22 4 31 0l215-101a16 16 0 000-30zM30 162l214 102c10 5 22 5 31 0l215-102a16 16 0 000-30L275 32a36 36 0 00-31 0L30 132a16 16 0 000 30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-rh1emct4r6";
freezeTemplate(tmpl);
