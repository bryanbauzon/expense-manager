import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_service_campaign.css";

import _implicitScopedStylesheets from "./product_service_campaign.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M240 353a8 8 0 018 7v116a24 24 0 01-23 24H61a25 25 0 01-25-23V362a8 8 0 017-9h197zm236 0a8 8 0 018 7v116a24 24 0 01-23 24H297a24 24 0 01-25-23V362a8 8 0 018-9h196zm-299 34l-1 1-46 50-21-20a6 6 0 00-8 0h-1l-9 8a5 5 0 000 7v1l30 28a13 13 0 009 4 12 12 0 009-4l55-58a6 6 0 001-7l-1-1-9-8a6 6 0 00-8-1zm236 0l-1 1-46 50-22-20a6 6 0 00-7 0h-1l-9 8a5 5 0 00-1 7l1 1 30 28a13 13 0 009 4 11 11 0 008-4l56-59a7 7 0 000-7l-9-8a6 6 0 00-8-1zM225 272a24 24 0 0123 23v26a8 8 0 01-7 8H28a8 8 0 01-8-7v-26a24 24 0 0121-24h184zm252 0a24 24 0 0123 23v26a8 8 0 01-7 8H279a8 8 0 01-7-7v-26a24 24 0 0121-24h184zM357 102a8 8 0 018 7v115a24 24 0 01-23 24H179a25 25 0 01-25-23V110a8 8 0 017-8h197zm-63 34l-47 51-21-20a6 6 0 00-8-1l-1 1-8 8a5 5 0 00-1 7h1l30 29a12 12 0 008 3 11 11 0 009-3l55-59a7 7 0 001-7l-1-1-8-7a6 6 0 00-8-2zm64-116a24 24 0 0124 23v26a8 8 0 01-7 8H146a8 8 0 01-8-7V44a24 24 0 0123-24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-39cme5dh9hq";
freezeTemplate(tmpl);
