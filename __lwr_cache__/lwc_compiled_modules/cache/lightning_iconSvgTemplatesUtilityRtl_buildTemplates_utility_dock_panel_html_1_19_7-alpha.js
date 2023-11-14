import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dock_panel.css";

import _implicitScopedStylesheets from "./dock_panel.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M19 350V90c0-39 31-70 70-70h260c39 0 70 31 70 70v30h-60V90c0-6-4-10-10-10H89c-6 0-10 4-10 10v260c0 6 4 10 10 10h30v60H89c-39 0-70-31-70-70zm440-190H199c-22 0-40 18-40 40v260c0 22 18 40 40 40h260c22 0 40-18 40-40V200c0-22-18-40-40-40zm-40 252c0 5-3 8-9 8H294c-5 0-10-5-10-9v-18c0-5 5-10 10-10h48c6 0 8-6 5-10L243 269a9 9 0 010-13l13-12a9 9 0 0112 0l104 104c4 4 10 1 10-5v-48c0-6 6-10 10-10h19c5 0 8 5 8 10v117z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2g1o9e43171";
freezeTemplate(tmpl);
