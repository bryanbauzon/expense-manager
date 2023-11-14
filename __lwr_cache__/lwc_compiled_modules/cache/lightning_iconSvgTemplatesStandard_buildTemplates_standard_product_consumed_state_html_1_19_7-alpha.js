import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_consumed_state.css";

import _implicitScopedStylesheets from "./product_consumed_state.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M471 616a16 16 0 01-12-5L307 459a17 17 0 01-5-12 16 16 0 015-12l24-25a16 16 0 0123 0l63 63a11 11 0 0019-8V227a17 17 0 0117-17h34a20 20 0 0118 17v240a11 11 0 007 10 11 11 0 0012-3l63-63a16 16 0 0112-5 17 17 0 0112 5l23 24a16 16 0 010 24L482 611a16 16 0 01-11 5zm50 66a158 158 0 0020 68H245a45 45 0 01-45-45V553a17 17 0 0117-17h34a17 17 0 0117 17v112a17 17 0 0016 17zm39-12a120 120 0 11120 120 120 120 0 01-120-120zm195-28l-80 81a15 15 0 01-22 0l-39-39a7 7 0 010-11l11-11a7 7 0 0111 0l28 28 69-69a7 7 0 0111 0l10 11a7 7 0 011 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3e1jg7h2i1t";
freezeTemplate(tmpl);
