import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./facility_bed.css";

import _implicitScopedStylesheets from "./facility_bed.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M200 442a25 25 0 0150 0v333a25 25 0 01-50 0zm550 133c28 0 50 22 50 50v150a25 25 0 01-50 0zm-500 0h500v142H250zm0-75h65c33 0 60 27 60 60v15H250zm354-209h-55v-55c0-20-16-36-36-36h-36c-20 0-36 16-36 36v55h-55c-19 0-36 16-36 36v36c0 20 17 36 36 36h55v55c0 19 16 36 36 36h36c20 0 36-17 36-36v-55h55c20 0 36-16 36-36v-36c0-20-16-36-36-36z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7uuuvpm5q6e";
freezeTemplate(tmpl);
