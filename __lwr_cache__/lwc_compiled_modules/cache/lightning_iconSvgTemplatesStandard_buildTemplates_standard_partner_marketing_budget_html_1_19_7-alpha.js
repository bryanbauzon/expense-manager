import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./partner_marketing_budget.css";

import _implicitScopedStylesheets from "./partner_marketing_budget.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M738 378c-182 56-325-116-525-35-15 6-23 20-23 37v207c0 27 23 45 48 37 197-60 341 112 526 35 14-6 25-19 25-37V415c1-25-26-45-51-37zM496 572a77 77 0 110-154 77 77 0 010 154z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ae5kpcjes6";
freezeTemplate(tmpl);
