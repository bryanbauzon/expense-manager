import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./maintenance_plan.css";

import _implicitScopedStylesheets from "./maintenance_plan.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M385 131h63a14 14 0 0014-13c0-3-2-7-4-10l-91-88c-2-3-5-4-8-4a14 14 0 00-14 13v63a42 42 0 0040 39zm56 56h-98a59 59 0 01-58-57V34a17 17 0 00-16-18H113a59 59 0 00-59 57v365a58 58 0 0059 58h289a59 59 0 0058-58V207c1-10-8-20-19-20zm-55 246a33 33 0 01-24 10c-9 0-18-3-24-10L228 323a71 71 0 01-23 6 84 84 0 01-93-75 86 86 0 013-35c1-3 5-4 8-1l48 48a9 9 0 0013 0l34-34a9 9 0 001-13s0-1-1-1l-48-48c-2-1-2-4 0-7l2-1 24-3a85 85 0 0186 85l-1 10-5 22 110 111a33 33 0 010 46z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5a7orm26hij";
freezeTemplate(tmpl);
