import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom53.css";

import _implicitScopedStylesheets from "./custom53.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M747 570h-6c-23 0-41-18-41-41V397c0-116-104-209-223-195a202 202 0 00-177 203v119c0 25-21 46-46 46h-1c-18 0-33 15-33 33v24c0 18 15 33 33 33h494c18 0 33-15 33-33v-24c0-18-15-33-33-33zM566 720H434c-8 0-15 6-13 14 7 38 40 66 80 66s72-27 80-66c0-8-6-14-15-14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-jrpp01gjqc";
freezeTemplate(tmpl);
