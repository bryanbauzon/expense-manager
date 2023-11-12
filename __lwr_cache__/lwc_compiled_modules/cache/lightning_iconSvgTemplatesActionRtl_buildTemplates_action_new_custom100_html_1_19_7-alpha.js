import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom100.css";

import _implicitScopedStylesheets from "./new_custom100.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M355 415H165c-6 0-9 5-8 11 8 31 51 55 102 55 52 0 95-24 102-55 3-6-1-11-6-11zm97-375H68c-26 0-48 22-48 49v228c0 27 22 49 48 49h384c26 0 48-22 48-49V89c0-27-22-49-48-49zm0 261c0 9-7 16-16 16H84c-9 0-16-7-16-16V105c0-9 7-16 16-16h352c9 0 16 7 16 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6ug9r0lpihf";
freezeTemplate(tmpl);
