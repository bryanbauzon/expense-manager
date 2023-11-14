import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./return_order_line_item.css";

import _implicitScopedStylesheets from "./return_order_line_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M800 254v47c0 12-11 22-23 22H407c-12 0-22-11-22-23v-47c0-12 11-22 23-22h370c13 0 23 11 22 23zm-528-23c12 1 21 11 20 23v47c0 12-11 22-23 22h-47c-12 0-22-11-22-23v-47c0-12 11-22 23-22zm-28 289c-5-9-6-29 3-33l17-16c9-4 27-2 32 6 50 83 177 125 260 84l17-8c3-1 5-4 6-7 2-7-1-14-8-16l-90-36c-10-3-15-14-12-24l11-35 1-3c4-8 13-12 21-8l220 86c10 3 15 14 12 24l-68 227-1 3c-4 8-13 12-21 8l-34-13c-9-4-15-14-12-24l28-94c3-10-7-21-17-16l-29 13c-107 52-268-1-336-118z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-36ev6kp5ps2";
freezeTemplate(tmpl);
