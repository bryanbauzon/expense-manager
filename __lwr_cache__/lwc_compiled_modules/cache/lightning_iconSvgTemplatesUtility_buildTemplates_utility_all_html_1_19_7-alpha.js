import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./all.css";

import _implicitScopedStylesheets from "./all.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M316 216c-12 0-22-10-22-22V55c0-12 10-22 22-22h142c12 0 22 10 22 22v139c0 12-10 22-22 22H316zm61 82l-82 89c-5 5-5 13 0 19l82 89c5 6 15 6 20 0l82-89c5-5 5-13 0-19l-82-89c-5-6-14-6-20 0zM48 65l72-41c7-4 15-4 21 0l71 41c7 4 11 11 11 19v82c0 8-4 15-11 19l-71 41c-7 4-15 4-21 0l-72-41c-7-4-11-11-11-19V84c0-8 4-15 11-19z"${3}/><circle cx="130" cy="394" r="93"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 520 520",
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
tmpl.stylesheetToken = "lwc-2d8rhts2n7k";
freezeTemplate(tmpl);
