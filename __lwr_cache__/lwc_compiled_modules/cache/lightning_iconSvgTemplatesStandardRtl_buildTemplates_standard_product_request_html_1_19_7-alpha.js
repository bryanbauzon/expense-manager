import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_request.css";

import _implicitScopedStylesheets from "./product_request.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M220 781c-14 0-24-11-23-23v-47c0-12 11-22 23-22h370c12 0 22 11 22 23v47c0 12-11 22-23 22H220c-1 0-1 0 0 0zm506 0c-12-1-22-11-21-23v-47c0-12 11-22 23-22h47c12 0 22 11 22 23v47c0 12-11 22-23 22zM456 576H219c-12 0-22-11-22-23v-47c0-12 11-22 23-22h237c12 0 22 11 22 23v47c0 12-11 22-23 22zM219 371c-12 0-22-11-22-23v-47c0-12 11-22 23-22h149c12 0 22 11 22 23v47c0 12-11 22-23 22zm548 231h-19c-8-2-19-12-19-19 7-76-59-164-137-179l-16-3c-3-1-6 0-8 2-5 3-5 10-2 14l44 67v1c5 6 3 16-4 20l-25 17h-1c-6 5-16 3-20-4L450 356v-1c-5-6-3-16 4-20l161-109h1c6-5 16-3 20 4l17 25v1c5 6 4 15-3 20l-67 45c-2 1-4 3-4 6-1 6 3 11 8 12l27 6a227 227 0 01172 237c0 9-10 21-19 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-795o9ntpg5t";
freezeTemplate(tmpl);
