import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_forecast.css";

import _implicitScopedStylesheets from "./work_forecast.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M777 292s-35-72-113-72-115 74-115 74a117 117 0 00-99 0s-36-74-114-74-113 72-113 72-73 163-75 309c-2 144 95 179 141 179 50 0 168-21 162-185a48 48 0 0145-27 59 59 0 0154 27c-6 164 112 185 161 185 45 0 143-35 141-179-2-146-75-309-75-309zM298 716a87 87 0 1187-87 87 87 0 01-87 87zm404 0a87 87 0 1187-87 87 87 0 01-87 87z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-49dffeb9sse";
freezeTemplate(tmpl);
