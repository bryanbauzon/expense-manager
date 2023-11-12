import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./action_list_component.css";

import _implicitScopedStylesheets from "./action_list_component.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M539 659v40c0 11-9 20-20 20H220c-11 0-20-9-20-20v-40c0-11 9-20 20-20h299c11 0 20 9 20 20zm0-179v40c0 11-9 20-20 20H220c-11 0-20-9-20-20v-40c0-11 9-20 20-20h299c11 0 20 9 20 20zm0-178v40c0 11-9 20-20 20H220c-11 0-20-9-20-20v-40c0-11 9-20 20-20h299c11 0 20 9 20 20zm132 20c0 22 18 40 40 40s40-18 40-40-18-40-40-40-40 18-40 40zm0 357c0 22 18 40 40 40s40-18 40-40-18-40-40-40-40 18-40 40zm-50-179c0 50 40 90 90 90s90-40 90-90-40-90-90-90-90 40-90 90zm60 0c0-16 14-30 30-30s30 13 30 30c0 16-13 30-30 30s-30-13-30-30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-12me260aim5";
freezeTemplate(tmpl);
