import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./procedure_detail.css";

import _implicitScopedStylesheets from "./procedure_detail.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M697 795a102 102 0 11102-102 102 102 0 01-102 102zm9-127a11 11 0 00-7 2l-17 12a28 28 0 00-5 6 3 3 0 000 3 3 3 0 004 1 31 31 0 004-2l3-1c2-1 3 0 3 2a11 11 0 010 3l-12 48a9 9 0 005 10 11 11 0 0011-1l16-11a55 55 0 007-7 2 2 0 001-3 3 3 0 00-3-1 30 30 0 00-4 1l-4 2c-1 0-3 0-3-2a16 16 0 011-3l11-45a10 10 0 00-11-14zm11-21a16 16 0 00-18-14 14 14 0 00-11 20 16 16 0 0017 8 15 15 0 0012-14zM348 305h189a17 17 0 0017-18v-34a52 52 0 00-51-52l-120 1a52 52 0 00-52 51v34a17 17 0 0017 18zm213 388a135 135 0 015-36H265a12 12 0 01-11-12v-22a12 12 0 0111-12h324a136 136 0 0194-53V296a52 52 0 00-52-52h-17a8 8 0 00-8 9v34a69 69 0 01-69 69H348a69 69 0 01-69-69v-34a8 8 0 00-9-9h-17a52 52 0 00-51 52v370a52 52 0 0051 52h310a138 138 0 01-2-25zM434 423a12 12 0 0112-11h171a11 11 0 0112 11v23a12 12 0 01-12 11H446a12 12 0 01-12-11zm-1 100a12 12 0 0111-11h173a12 12 0 0111 11v23a11 11 0 01-11 11H444a11 11 0 01-11-11zm-180-30v-18a18 18 0 0118-18h26v-27a18 18 0 0118-18h18a18 18 0 0118 18v27h27a18 18 0 0118 18v17a18 18 0 01-18 18h-27v27a18 18 0 01-18 18h-18a18 18 0 01-17-18v-27h-27a18 18 0 01-18-17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2qtovuj7lk9";
freezeTemplate(tmpl);
