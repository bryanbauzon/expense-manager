import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./underline.css";

import _implicitScopedStylesheets from "./underline.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M445 420H75c-8 0-15 7-15 15v30c0 8 7 15 15 15h370c8 0 15-7 15-15v-30c0-8-7-15-15-15zm-192-40a143 143 0 01-133-144V100c0-11 9-20 20-20h20a20 20 0 0120 20v137c0 43 32 80 75 83a80 80 0 0085-80V100c0-11 9-20 20-20h20a20 20 0 0120 20v140a140 140 0 01-147 140z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2r3ejfj5fs";
freezeTemplate(tmpl);
