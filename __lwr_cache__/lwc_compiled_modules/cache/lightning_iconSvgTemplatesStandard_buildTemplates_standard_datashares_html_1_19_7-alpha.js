import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./datashares.css";

import _implicitScopedStylesheets from "./datashares.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M751 475H612c-8 0-14 6-14 14v22c0 8 6 14 14 14h133v75H255v-75h132c7 0 13-6 13-14l1-23c0-7-7-13-14-13H249c-27 0-49 20-49 45v243c0 21 18 37 41 37h518c23 0 41-16 41-37V520c0-25-22-45-49-45zm-292 55V374h-94c-14 0-20-11-12-17l136-154c6-4 14-4 19 0l137 154c8 7 1 17-13 17h-91v156c0 10-10 19-21 19h-40c-11 0-21-9-21-19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-reodlvbg6t";
freezeTemplate(tmpl);
