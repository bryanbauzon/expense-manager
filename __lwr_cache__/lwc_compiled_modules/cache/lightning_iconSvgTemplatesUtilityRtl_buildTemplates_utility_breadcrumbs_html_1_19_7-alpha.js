import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./breadcrumbs.css";

import _implicitScopedStylesheets from "./breadcrumbs.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M357 421c-5 0-10-2-13-6L227 269c-4-6-4-14 0-19l116-146c3-3 8-5 12-5h81c6 0 10 4 10 10v301c0 6-4 10-10 10zM77 270l117 146c6 6 14 7 21 2l23-19c6-5 7-15 2-21l-95-118 95-117c6-6 5-16-2-21l-23-19c-7-6-16-4-21 2L77 250c-4 5-4 12 0 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3ct8vtk538";
freezeTemplate(tmpl);
