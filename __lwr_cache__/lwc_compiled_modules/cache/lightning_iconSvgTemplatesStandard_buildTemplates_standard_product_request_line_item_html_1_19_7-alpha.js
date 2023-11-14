import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_request_line_item.css";

import _implicitScopedStylesheets from "./product_request_line_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M778 774H408c-12 0-23-10-23-22v-47c0-12 10-23 22-23h370c12 0 23 10 23 22v47c1 12-9 23-22 23zm-509 0h-46c-12 0-23-10-23-22v-47c0-12 10-23 22-23h47c12 0 23 10 23 22v47c1 12-8 22-20 23zm-25-289c68-117 229-170 336-118l29 13c10 5 20-6 17-16l-28-94c-3-10 3-20 12-24l34-13c8-4 17 0 21 8l1 3 68 227c3 10-2 21-12 24l-220 86c-8 4-17 0-21-8l-1-3-11-35c-3-10 2-21 12-24l90-36c7-2 10-9 8-16-1-3-3-6-6-7l-17-8c-83-41-210 1-260 84-5 8-23 10-32 6l-17-16c-9-4-8-24-3-33z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-14c9qool1jp";
freezeTemplate(tmpl);
