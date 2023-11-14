import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./toggle_panel_bottom.css";

import _implicitScopedStylesheets from "./toggle_panel_bottom.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M46 8H6a2 2 0 00-2 2v32c0 1.1.9 2 2 2h40a2 2 0 002-2V10a2 2 0 00-2-2zm-2 32H8V12h36zm-3-2H11.1a1 1 0 01-1-1V27a1 1 0 011-1H41a1 1 0 011 1v10a1 1 0 01-1 1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6fco50l4fdo";
freezeTemplate(tmpl);
