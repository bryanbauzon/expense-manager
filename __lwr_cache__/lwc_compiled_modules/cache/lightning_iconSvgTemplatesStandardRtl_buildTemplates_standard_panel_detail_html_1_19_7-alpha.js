import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./panel_detail.css";

import _implicitScopedStylesheets from "./panel_detail.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M700 200H300c-55 0-100 45-100 100v400c0 55 45 100 100 100h400c55 0 100-45 100-100V300c0-55-45-100-100-100zm50 500c0 28-22 50-50 50H300c-28 0-50-22-50-50V300c0-28 22-50 50-50h400c28 0 50 22 50 50zM650 400H550c-28 0-50 22-50 50v150c0 28 22 50 50 50h100c28 0 50-22 50-50V450c0-28-22-50-50-50zm0 192c0 4-4 8-8 8h-84c-4 0-8-4-8-8v-34c0-4 4-8 8-8h84c4 0 8 4 8 8zm0-100c0 4-4 8-8 8h-84c-4 0-8-4-8-8v-34c0-4 4-8 8-8h84c4 0 8 4 8 8zm25-192H325a25 25 0 000 50h350a25 25 0 000-50z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3gfjs93a0j";
freezeTemplate(tmpl);
