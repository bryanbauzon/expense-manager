import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./return_order_line_item.css";

import _implicitScopedStylesheets from "./return_order_line_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M222 231h370c12 0 23 10 23 22v47c0 12-10 23-22 23H223c-12 0-23-10-23-22v-47c-1-12 9-23 22-23zm509 0h46c12 0 23 10 23 22v47c0 12-10 23-22 23h-47c-12 0-23-10-23-22v-47c-1-12 8-22 20-23zm25 289c-68 117-229 170-336 118l-29-13c-10-5-20 6-17 16l28 94c3 10-3 20-12 24l-34 13c-8 4-17 0-21-8l-1-3-68-227c-3-10 2-21 12-24l220-86c8-4 17 0 21 8l1 3 11 35c3 10-2 21-12 24l-90 36c-7 2-10 9-8 16 1 3 3 6 6 7l17 8c83 41 210-1 260-84 5-8 23-10 32-6l17 16c9 4 8 24 3 33z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1h1ssbdg2r2";
freezeTemplate(tmpl);
