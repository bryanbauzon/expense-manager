import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./layout_tile.css";

import _implicitScopedStylesheets from "./layout_tile.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20 75a29 29 0 0129-29h421a29 29 0 0129 30v191a29 29 0 01-29 29H50a29 29 0 01-30-29zm72 288a24 24 0 0124-24h278a24 24 0 110 48H116a24 24 0 01-24-24zm82 63a24 24 0 100 48h163a24 24 0 000-48z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1733qgfkv1c";
freezeTemplate(tmpl);
