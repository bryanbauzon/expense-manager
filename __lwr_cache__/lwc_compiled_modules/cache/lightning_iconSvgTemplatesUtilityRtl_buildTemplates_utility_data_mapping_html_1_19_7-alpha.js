import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_mapping.css";

import _implicitScopedStylesheets from "./data_mapping.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M445 210a55 55 0 11-49 80h-10c-53 0-72 17-102 73l-2 4-2 3a202 202 0 01-46 66 150 150 0 01-104 34h-6a55 55 0 110-50h10c54 0 73-18 104-77l2-3a272 272 0 0131-50H124a55 55 0 110-50h272a55 55 0 0147-30zm0-190a55 55 0 11-49 80H124a55 55 0 110-50h272a55 55 0 0149-30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6q57h90b90m";
freezeTemplate(tmpl);
