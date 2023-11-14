import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./branch_merge.css";

import _implicitScopedStylesheets from "./branch_merge.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M265 705c34-70 94-120 163-145 26-10 53-16 79-19h44v136c0 11 12 17 22 10l212-177c8-6 8-20 0-25L573 312c-8-6-22 0-22 10v137h-44c-27-3-55-10-79-19-68-26-129-75-163-145-4-10-16-14-26-10l-38 16c-11 5-14 16-8 27 36 76 94 135 162 172-69 37-126 96-162 173-5 11-4 22 8 27l38 16c10 4 22-1 26-11z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3rid1ojdf7n";
freezeTemplate(tmpl);
