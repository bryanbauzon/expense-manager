import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./return_order.css";

import _implicitScopedStylesheets from "./return_order.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M774 223c14 0 24 11 23 23v47c0 12-11 22-23 22H404c-12 0-22-11-22-23v-47c0-12 11-22 23-22zm-506 0c12 1 22 11 21 23v47c0 12-11 22-23 22h-47c-12 0-22-11-22-23v-47c0-12 11-22 23-22zm507 205c12 0 22 11 22 23v47c0 12-11 22-23 22H537c-12 0-22-11-22-23v-47c0-12 11-22 23-22zm0 205c12 0 22 11 22 23v47c0 12-11 22-23 22H625c-12 0-22-11-22-23v-47c0-12 11-22 23-22zM227 402h19c8 2 19 12 19 19-7 76 59 164 137 179l16 3c3 1 6 0 8-2 5-3 5-10 2-14l-44-67v-1c-5-6-3-16 4-20l25-17h1c6-5 16-3 20 4l110 162v1c5 6 3 16-4 20L379 778h-1c-6 5-16 3-20-4l-17-25v-1c-5-6-4-15 3-20l67-45c2-1 4-3 4-6 1-6-3-11-8-12l-27-6a227 227 0 01-172-237c0-9 10-21 19-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2497ailj8ui";
freezeTemplate(tmpl);
