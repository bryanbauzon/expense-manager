import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom73.css";

import _implicitScopedStylesheets from "./custom73.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M235 350h530c13 0 23-13 19-25-12-41-30-79-54-112-7-10-21-11-29-3a137 137 0 01-188-5c-8-7-20-7-27 0-25 25-59 40-96 40-35 0-67-13-92-35-9-8-22-6-29 3-24 33-42 71-54 112-3 12 7 25 20 25zm565 80c0-11-9-20-20-20H220c-11 0-20 9-20 20v4c0 186 130 341 300 365a361 361 0 00300-365z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-nislmo4bhq";
freezeTemplate(tmpl);
