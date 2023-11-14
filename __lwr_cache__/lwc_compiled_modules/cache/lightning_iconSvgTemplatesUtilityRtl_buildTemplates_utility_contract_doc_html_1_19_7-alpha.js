import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_doc.css";

import _implicitScopedStylesheets from "./contract_doc.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M457 129L350 23a10 10 0 00-8-3 10 10 0 00-11 11v85a32 32 0 0032 32h85a10 10 0 0011-11 10 10 0 00-3-8zm-13 67H332a48 48 0 01-48-48V36a16 16 0 00-16-16H108a48 48 0 00-48 48v384a48 48 0 0048 48h304a48 48 0 0048-48V212a16 16 0 00-16-16zm-328-75l40-6 2-1 17-36a4 4 0 017 0l17 36 3 1 39 6c2 0 4 4 1 5l-28 28-1 4 6 39a3 3 0 01-5 3l-34-18a2 2 0 00-3 0l-36 18a3 3 0 01-5-3l6-40a5 5 0 000-3l-30-28 4-5zm248 267a16 16 0 01-16 16H140a16 16 0 01-16-16v-16a16 16 0 0116-16h208a16 16 0 0116 16zm32-96a16 16 0 01-16 16H140a16 16 0 01-16-16v-16a16 16 0 0116-16h240a16 16 0 0116 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-c4igposc27";
freezeTemplate(tmpl);
