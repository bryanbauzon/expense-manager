import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./field_sales.css";

import _implicitScopedStylesheets from "./field_sales.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 200a237 237 0 00-237 239c0 164 170 315 222 355a24 24 0 0031 0c53-41 221-191 221-355a237 237 0 00-237-239zm0 420a183 183 0 11182-183 183 183 0 01-182 183zm-70-288a51 51 0 1051 51 51 51 0 00-51-51zm0 78a27 27 0 1127-27 27 27 0 01-27 27zm23 136a5 5 0 01-4 3h-16a4 4 0 01-4-3 4 4 0 011-4l116-214a5 5 0 014-2h17a4 4 0 012 6zm117-105a51 51 0 1051 51 51 51 0 00-51-51zm0 78a27 27 0 1127-27 27 27 0 01-27 27z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-npc6avsp2i";
freezeTemplate(tmpl);
