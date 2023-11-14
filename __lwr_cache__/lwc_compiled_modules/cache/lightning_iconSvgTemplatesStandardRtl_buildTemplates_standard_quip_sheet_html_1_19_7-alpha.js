import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quip_sheet.css";

import _implicitScopedStylesheets from "./quip_sheet.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M319 388H219c-10 0-19 9-19 19v319c0 28 22 50 50 50h69c10 0 19-9 19-19V407c0-11-9-19-19-19zm462 0H406c-10 0-19 9-19 19v350c0 10 9 19 19 19h344c28 0 50-22 50-50V406c0-10-9-18-19-18zm-31-163H250c-28 0-50 22-50 50v44c0 10 9 19 19 19h562c10 0 19-9 19-19v-44c0-27-22-50-50-50z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5su4fs8t5al";
freezeTemplate(tmpl);
