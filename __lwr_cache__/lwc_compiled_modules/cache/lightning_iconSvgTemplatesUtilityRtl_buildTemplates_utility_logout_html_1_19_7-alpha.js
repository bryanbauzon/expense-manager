import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./logout.css";

import _implicitScopedStylesheets from "./logout.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M325 500h135a40 40 0 0040-40V60a40 40 0 00-40-40H325c-8 0-15 7-15 15v30c0 8 7 15 15 15h100c8 0 15 7 15 15v330c0 8-7 15-15 15H325c-8 0-15 7-15 15v30c0 8 7 15 15 15zm-165-96c6 6 15 6 21 0l21-21c6-6 6-15 0-21l-56-56c-6-6-2-17 7-17h212c8 0 15-8 15-16v-30c0-8-7-14-15-14H152c-9 0-13-11-7-17l56-56c6-6 6-15 0-21l-21-21c-6-6-15-6-21 0L24 249c-6 6-6 15 0 21l136 134z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1c3bjdrb4v2";
freezeTemplate(tmpl);
