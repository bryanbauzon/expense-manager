import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./visibility_rule_assigned.css";

import _implicitScopedStylesheets from "./visibility_rule_assigned.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M498 251l-6-12-152 165a268 268 0 00158-136c3-5 3-11 0-16zM268 416l198-214a281 281 0 00-28-30l-77 82v6c0 55-44 100-99 101l-48 52c15 2 30 4 46 4h9zm-101-16A268 268 0 0122 268a17 17 0 010-17 266 266 0 01238-148c53 0 102 15 143 42l-57 60a101 101 0 00-86-47 101 101 0 00-101 102c0 39 21 72 54 90l-47 50zm73-78a64 64 0 01-44-61c0-36 30-65 65-65a64 64 0 0160 40l-81 84z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-705r78gt4ma";
freezeTemplate(tmpl);
