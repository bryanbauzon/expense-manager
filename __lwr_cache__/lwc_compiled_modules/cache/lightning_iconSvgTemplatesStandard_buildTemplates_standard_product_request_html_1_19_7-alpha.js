import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_request.css";

import _implicitScopedStylesheets from "./product_request.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M774 781H405c-12 0-23-10-23-22v-47c0-12 10-23 22-23h370c12 0 23 10 23 22v47c1 12-9 23-23 23zm-508 0h-46c-12 0-23-10-23-22v-47c0-12 10-23 22-23h47c12 0 23 10 23 22v47c1 12-9 22-21 23zm272-205c-12 0-23-10-23-22v-47c0-12 10-23 22-23h237c12 0 23 10 23 22v47c0 12-10 23-22 23zm88-205c-12 0-23-10-23-22v-47c0-12 10-23 22-23h149c12 0 23 10 23 22v47c0 12-10 23-22 23zM208 582a227 227 0 01172-237l27-6c5-1 9-6 8-12 0-3-2-5-4-6l-67-45c-7-5-8-14-3-20v-1l17-25c4-7 14-9 20-4h1l161 109c7 4 9 14 4 20v1L434 518c-4 7-14 9-20 4h-1l-25-17c-7-4-9-14-4-20v-1l44-67c3-4 3-11-2-14-2-2-5-3-8-2l-16 3c-78 15-144 103-137 179 0 7-11 17-19 19h-19c-9 1-19-11-19-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5dlpaitvac9";
freezeTemplate(tmpl);
