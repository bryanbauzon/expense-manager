import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./action_list_component.css";

import _implicitScopedStylesheets from "./action_list_component.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M482 639h299c11 0 20 9 20 20v40c0 11-9 20-20 20H482c-11 0-20-9-20-20v-40c0-11 9-20 20-20zm0-179h299c11 0 20 9 20 20v40c0 11-9 20-20 20H482c-11 0-20-9-20-20v-40c0-11 9-20 20-20zm0-178h299c11 0 20 9 20 20v40c0 11-9 20-20 20H482c-11 0-20-9-20-20v-40c0-11 9-20 20-20zm-192 0c-22 0-40 18-40 40s18 40 40 40 40-18 40-40-18-40-40-40zm0 357c-22 0-40 18-40 40s18 40 40 40 40-18 40-40-18-40-40-40zm0-229c-50 0-90 40-90 90s40 90 90 90 90-40 90-90-40-90-90-90zm0 120c-17 0-30-14-30-30 0-17 14-30 30-30s30 14 30 30c0 17-13 30-30 30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1hrfofdmrl7";
freezeTemplate(tmpl);
