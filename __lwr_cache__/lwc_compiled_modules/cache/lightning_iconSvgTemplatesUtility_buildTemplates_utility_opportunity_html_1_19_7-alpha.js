import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./opportunity.css";

import _implicitScopedStylesheets from "./opportunity.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M418 400H102c-8 0-15 7-15 14v1c0 25 21 45 45 45h256a45 45 0 0045-45v-1c0-7-7-14-15-14zm37-307a45 45 0 00-29 79 79 79 0 01-77 48 79 79 0 01-74-74c0-7 0-13 2-19a45 45 0 10-62-42 46 46 0 0029 42l1 19a79 79 0 01-74 74 78 78 0 01-77-48 45 45 0 00-29-79 45 45 0 000 90l21 160c1 7 7 12 14 12h320c6 0 12-5 14-12l21-160c25 0 45-21 45-45s-20-45-45-45z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3nf02l3j5iu";
freezeTemplate(tmpl);
