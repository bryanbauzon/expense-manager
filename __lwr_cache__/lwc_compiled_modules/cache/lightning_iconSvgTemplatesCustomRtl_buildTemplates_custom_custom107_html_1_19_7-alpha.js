import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom107.css";

import _implicitScopedStylesheets from "./custom107.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M777 515h-59v262a12 12 0 01-13 12H586a12 12 0 01-11-13V574H430v203c1 6-4 12-10 12H300a12 12 0 01-13-13V515h-59c-5 0-11-3-11-8-2-5-2-10 3-13l275-275c5-5 13-5 15 0l275 275c5 3 5 8 3 13-3 5-5 8-11 8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4quod4pfs8k";
freezeTemplate(tmpl);
