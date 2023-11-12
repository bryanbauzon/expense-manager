import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./chart.css";

import _implicitScopedStylesheets from "./chart.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M455 234L250 347a20 20 0 01-30-18V84c0-10-10-18-19-15a220 220 0 10276 175c-2-10-13-15-22-10zm-178 46l197-105c12-6 16-22 8-33A302 302 0 00287 22c-14-3-27 8-27 22v226c0 9 9 14 17 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ki864kpgsr";
freezeTemplate(tmpl);
