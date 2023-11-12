import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./call_coaching.css";

import _implicitScopedStylesheets from "./call_coaching.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M418 200c29 0 53 26 49 55l-7 66c-3 22-20 40-42 44l-60 9c-8 1-14 8-14 16v219c0 8 6 15 14 17l60 9c23 3 40 22 42 44l8 66c4 29-19 56-49 54h-64c-14 0-28-5-37-16a426 426 0 01-1-567c9-10 23-16 37-16zm185 129c11 0 19 8 19 19v308a19 19 0 11-38 0V348c0-10 8-19 19-19zm-85 73c11 0 19 8 19 19v162c0 10-9 19-19 19s-19-8-19-19V421c0-10 8-19 19-19zm172 0c11 0 19 8 19 19v157c0 10-9 18-19 18s-19-8-19-19V421c0-10 8-19 19-19zm89 56c11 0 19 8 19 19v36c0 11-8 19-19 19-10 0-19-8-19-19v-36c0-10 8-19 19-19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7s5vqbo7ju1";
freezeTemplate(tmpl);
