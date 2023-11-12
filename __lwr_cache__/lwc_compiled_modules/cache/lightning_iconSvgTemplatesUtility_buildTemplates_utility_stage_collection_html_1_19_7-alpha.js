import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./stage_collection.css";

import _implicitScopedStylesheets from "./stage_collection.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><circle cx="25.9" cy="26" r="3.4"${3}/><path d="M46.7 22.6c-1.2 0-2.3.7-2.9 1.6h-3.6a14.4 14.4 0 00-28.6 0H8.3c-.6-1-1.7-1.6-2.9-1.6C3.5 22.6 2 24.1 2 26s1.5 3.4 3.4 3.4c1.2 0 2.2-.6 2.8-1.6h3.5c.9 7.1 7 12.6 14.3 12.6s13.3-5.5 14.3-12.6h3.6c.6.9 1.6 1.6 2.8 1.6 1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4zM26 35.6a9.6 9.6 0 110-19.2 9.6 9.6 0 010 19.2z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-7i0eavu2h5t";
freezeTemplate(tmpl);
