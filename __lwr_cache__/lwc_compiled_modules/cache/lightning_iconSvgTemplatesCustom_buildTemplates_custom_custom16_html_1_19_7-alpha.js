import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom16.css";

import _implicitScopedStylesheets from "./custom16.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M720 700h-10V480c0-11-9-20-20-20h-20c-11 0-20 9-20 20v220h-60V480c0-11-9-20-20-20h-20c-11 0-20 9-20 20v220h-60V480c0-11-9-20-20-20h-20c-11 0-20 9-20 20v220h-60V480c0-11-9-20-20-20h-20c-11 0-20 9-20 20v220h-10c-33 0-60 27-60 60v20c0 11 9 20 20 20h520c11 0 20-9 20-20v-20c0-33-27-60-60-60zm50-356L523 208c-7-5-15-8-23-8s-16 3-23 8L230 344c-6 4-10 10-10 17v19c0 11 9 20 20 20h520c11 0 20-9 20-20v-18c0-7-4-14-10-18zm-270 16c-28 0-50-22-50-50s22-50 50-50 50 22 50 50-22 50-50 50z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2n7861jokq2";
freezeTemplate(tmpl);
