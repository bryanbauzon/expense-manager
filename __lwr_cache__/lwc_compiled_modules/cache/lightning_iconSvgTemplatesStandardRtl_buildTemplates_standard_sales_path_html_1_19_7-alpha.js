import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sales_path.css";

import _implicitScopedStylesheets from "./sales_path.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M847 688c0 6-4 10-10 10H630c-5 0-11-3-14-7L468 511c-4-7-4-15 0-21l149-180c3-5 8-7 14-7h207c5 0 10 4 10 10l-2 6-142 170c-4 6-4 14 0 21l142 172c1 1 2 4 1 6zm-315 0c0 6-4 10-10 10H315c-5 0-11-3-14-7L153 511c-4-7-4-15 0-21l149-180c3-5 8-7 14-7h207c5 0 10 4 10 10l-2 6-142 170c-4 6-4 14 0 21l141 172 2 6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7vff5a0tob0";
freezeTemplate(tmpl);
