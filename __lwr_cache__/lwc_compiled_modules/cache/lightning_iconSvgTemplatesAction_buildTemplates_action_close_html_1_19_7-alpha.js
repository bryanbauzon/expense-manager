import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./close.css";

import _implicitScopedStylesheets from "./close.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M316 258l131-131c6-6 6-15 0-21l-21-21c-6-6-15-6-21 0L274 216c-4 4-10 4-14 0L129 84c-6-6-15-6-21 0l-21 21c-6 6-6 15 0 21l131 131c4 4 4 10 0 14L86 403c-6 6-6 15 0 21l21 21c6 6 15 6 21 0l132-131c4-4 10-4 14 0l131 131c6 6 15 6 21 0l21-21c6-6 6-15 0-21L316 272c-3-4-3-10 0-14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1754rc2qejv";
freezeTemplate(tmpl);
