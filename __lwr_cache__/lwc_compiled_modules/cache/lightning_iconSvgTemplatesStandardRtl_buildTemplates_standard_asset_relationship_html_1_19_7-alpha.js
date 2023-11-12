import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./asset_relationship.css";

import _implicitScopedStylesheets from "./asset_relationship.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M728 547v-4c0-90-53-168-129-206v-9c0-55-45-100-100-100s-100 45-100 100v9a230 230 0 00-129 206v4a100 100 0 1088 176 225 225 0 00280 0 100 100 0 00160-80c2-45-28-84-70-96zM389 688a100 100 0 00-72-143v-2c0-70 40-131 98-162a101 101 0 00170 0c58 31 98 92 98 162v2a100 100 0 00-72 143 180 180 0 01-222 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3vm6abng4tc";
freezeTemplate(tmpl);
