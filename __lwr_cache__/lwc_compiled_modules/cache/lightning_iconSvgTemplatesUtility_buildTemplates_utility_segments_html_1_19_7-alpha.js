import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./segments.css";

import _implicitScopedStylesheets from "./segments.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M494 220l-8-23-185 66-4 11a40 40 0 01-77-14 46 46 0 0112-30l5-7V19l-30 6a235 235 0 00-130 81 241 241 0 00-56 153 240 240 0 00480 0 143 143 0 00-7-39zm-98 176a190 190 0 01-136 56 191 191 0 01-147-314 195 195 0 0176-55v126a93 93 0 00-16 52 87 87 0 0026 62 90 90 0 0062 26c19 0 37-6 52-17a84 84 0 0026-30l113-40a193 193 0 01-56 134zm-90-186l158-56c4-1 7-6 6-10a8 8 0 00-2-3l-2-4A241 241 0 00298 24c-7-1-13 4-14 11v167a16 16 0 0021 8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7ubd29pi7bu";
freezeTemplate(tmpl);
