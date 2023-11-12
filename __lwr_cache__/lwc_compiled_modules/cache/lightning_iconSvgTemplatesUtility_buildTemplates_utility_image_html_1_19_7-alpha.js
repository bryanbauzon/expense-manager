import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./image.css";

import _implicitScopedStylesheets from "./image.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 100a40 40 0 00-40-40H60a40 40 0 00-40 40v320a40 40 0 0040 40h400a40 40 0 0040-40V100zM396 380H106a15 15 0 01-13-23l88-153c4-7 13-7 17 0l53 91c4 6 13 7 17 1l43-62a10 10 0 0117 0l79 126c6 9 0 20-11 20zm-26-180c-22 0-40-18-40-40s18-40 40-40 40 18 40 40-18 40-40 40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7bf7dn2f29e";
freezeTemplate(tmpl);
