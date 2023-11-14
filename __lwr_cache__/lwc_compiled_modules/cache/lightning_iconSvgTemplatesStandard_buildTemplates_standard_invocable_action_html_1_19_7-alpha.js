import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./invocable_action.css";

import _implicitScopedStylesheets from "./invocable_action.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M628 712v78c0 6 5 11 11 11l6-2 151-123c2-2 3-5 3-8s-2-6-4-8L644 531l-5-1c-6 0-11 5-11 11v83c-93 25-169-57-169-57-2-2-5-3-8-3-6 0-11 5-11 11v2c38 157 188 135 188 135zM382 589l-2-7v-9c0-39 32-71 71-71 19 0 36 7 50 21l1 1 1 1c9 10 35 31 66 40v-25c0-39 32-71 71-71 15 0 25 4 32 8l7 3 6 5 85 72a112 112 0 00-80-190h-6v-10c0-62-51-113-113-113-30 0-56 11-76 30-16-42-57-74-106-74a114 114 0 00-98 170c-50 12-86 56-86 110 0 61 47 110 108 112h74c-4-1-4-2-5-3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-651no9nrije";
freezeTemplate(tmpl);
