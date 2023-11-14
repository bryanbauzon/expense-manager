import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./move.css";

import _implicitScopedStylesheets from "./move.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M497 253l-83-90c-6-6-14-1-14 9v58H300c-6 0-10-4-10-10V120h59c10 0 15-9 9-14l-90-83c-4-3-10-3-14 0l-90 83c-6 6-1 14 9 14h57v100c0 6-4 10-10 10H120v-59c0-10-9-15-14-9l-83 90c-3 4-3 10 0 14l83 90c6 6 14 1 14-9v-57h100c6 0 10 4 10 10v100h-59c-10 0-15 9-9 14l90 83c4 3 10 3 14 0l90-83c6-6 1-14-9-14h-57V300c0-6 4-10 10-10h100v59c0 10 9 15 14 9l83-90c4-5 4-11 0-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-m8i0igpo6d";
freezeTemplate(tmpl);
