import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./client.css";

import _implicitScopedStylesheets from "./client.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M448 583a217 217 0 01143-29c5 1 6-1 1-4-19-11-40-21-62-30-43-18-49-34-49-52s12-34 26-47c25-23 39-54 39-91 0-69-43-128-119-128s-119 59-119 128c0 37 14 69 39 91 14 13 26 30 26 47s-7 34-49 52c-62 26-121 56-122 112 0 37 28 70 63 70h142c11 0 20-9 20-20v-65c1-14 8-27 21-34zm325 59c-94 29-168-60-271-18-8 3-12 10-12 19v107c0 14 12 23 25 19 102-31 176 58 272 18 7-3 13-10 13-19V661c0-13-14-23-27-19zM648 742c-22 0-40-18-40-40s18-40 40-40 40 18 40 40-18 40-40 40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4er4v4cuibd";
freezeTemplate(tmpl);
