import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./salesforce1.css";

import _implicitScopedStylesheets from "./salesforce1.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M217 119c17-17 40-28 66-28 34 0 64 19 80 47 14-6 29-10 45-10 62 0 112 50 112 112s-50 112-112 112c-8 0-15-1-22-2a82.4 82.4 0 01-72 42c-13 0-25-3-36-8a92.7 92.7 0 01-86 56c-40 0-75-25-88-61-6 1-12 2-18 2a87 87 0 01-44-162 100.5 100.5 0 0193-140c35 1 64 16 82 40"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-25pf7jc0oip";
freezeTemplate(tmpl);
