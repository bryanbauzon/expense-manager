import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./calculated_insights.css";

import _implicitScopedStylesheets from "./calculated_insights.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M440 68a60 60 0 00-48 96l-50 88h-6a60 60 0 00-30 8l-63-47a59 59 0 001-13 60 60 0 10-107 37l-52 95h-5a60 60 0 00-37 13 60 60 0 1084 10l53-95h5a60 60 0 0030-8l64 47a59 59 0 00-2 13 60 60 0 10108-36l50-88h6a60 60 0 100-120z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-26iom6s5va9";
freezeTemplate(tmpl);
