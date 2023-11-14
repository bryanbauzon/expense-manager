import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lightning_usage.css";

import _implicitScopedStylesheets from "./lightning_usage.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M190 739c0 28 22 50 50 50h530c11 0 20-9 20-20v-21c0-11-9-20-20-20H269c-10 0-19-9-19-19V209c0-11-9-20-20-20h-20c-11 0-20 9-20 20zm154-160c-8 0-15-3-21-9a29 29 0 010-42l160-159c12-12 31-12 42 0l77 77 135-137c12-12 31-12 42 0 12 12 12 31 0 42L624 508c-6 6-13 9-21 9s-16-3-21-9l-78-77-138 139c-6 6-14 9-22 9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-68cafr8r84m";
freezeTemplate(tmpl);
