import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./office365.css";

import _implicitScopedStylesheets from "./office365.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M308 495a30 30 0 0019 0l119-39a20 20 0 0014-19V77c0-6-4-12-10-14L329 22c-7-2-14-2-20 0L70 114c-6 2-10 8-10 14v271c0 6 4 12 10 14zm12-67c0 6-5 11-10 10l-200-27c-5-1-9-5-9-10v-4c0-4 2-7 7-9l38-18c4-2 6-5 6-9V148c0-5 3-9 8-10l150-34c6-1 12 3 12 10v314z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-31nghlp04j3";
freezeTemplate(tmpl);
