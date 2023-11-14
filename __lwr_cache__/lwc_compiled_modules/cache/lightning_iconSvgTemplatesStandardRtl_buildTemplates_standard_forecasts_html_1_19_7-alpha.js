import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./forecasts.css";

import _implicitScopedStylesheets from "./forecasts.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M777 292s-35-72-113-72-115 74-115 74c-52-25-99 0-99 0s-36-74-114-74-113 72-113 72-73 163-75 309c-2 144 95 179 141 179 50 0 168-21 162-185 0 0 12-28 45-27 40 0 54 27 54 27-6 164 112 185 161 185 45 0 143-35 141-179-2-146-75-309-75-309zM298 716a87 87 0 110-174 87 87 0 010 174zm404 0a87 87 0 110-174 87 87 0 010 174z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-8m6lvrk03v";
freezeTemplate(tmpl);
