import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dynamic_highlights_panel.css";

import _implicitScopedStylesheets from "./dynamic_highlights_panel.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M780 383H221c-11 0-21 9-21 19v316c0 29 25 52 55 52h490c30 0 55-23 55-52V402c0-10-10-20-21-20zm-30-163H250c-27 0-50 23-50 50v44c0 10 9 18 19 18h562c10 0 19-8 19-18v-44c0-27-23-50-50-50z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6ung623ii8u";
freezeTemplate(tmpl);
