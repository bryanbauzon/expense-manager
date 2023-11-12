import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./calculated_insights.css";

import _implicitScopedStylesheets from "./calculated_insights.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M725 260a75 75 0 00-60 120l-62 110a50 50 0 00-8 0 75 75 0 00-38 10l-79-58a71 71 0 002-17 75 75 0 10-134 46l-65 119h-6a75 75 0 1059 29l65-119h6a75 75 0 0038-10l79 58a77 77 0 00-2 17 75 75 0 10135-45l62-110h8a75 75 0 000-150zm5 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-762k1e943b9";
freezeTemplate(tmpl);
