import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shortcuts.css";

import _implicitScopedStylesheets from "./shortcuts.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M121 27h265c9 0 16 7 16 16 0 5-2 9-5 12l-72 72c44 39 167 175 23 349l-2 2-2 2c-3 4-8 7-14 7-9 0-16-7-16-16v-3l1-2c5-22 36-172-96-234l-87 87c-3 3-7 5-11 5-9 0-16-7-16-16V44c-1-9 7-17 16-17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2nffjd3v6np";
freezeTemplate(tmpl);
