import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./business_hours.css";

import _implicitScopedStylesheets from "./business_hours.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M481 353h32c9 0 16 7 16 16v140c0 4-2 8-4 12l-90 90c-6 6-16 6-22 0l-22-22c-6-6-6-16 0-22l75-76V370c-1-8 5-16 14-17zm364 139h-48c0-3-1-7-1-11-13-164-156-287-320-275-164 13-287 156-275 320a298 298 0 00294 276c84 2 165-33 222-94 5-5 10-10 4-16l-26-31c-9-11-17-6-24 1-50 55-124 83-198 75-103-10-199-106-210-207-13-129 81-245 210-258s245 81 258 210h-1c1 4 1 7 1 11h-47c-9 0-16 7-16 16 0 4 1 7 3 10l80 97c7 7 18 7 25 0l80-97c6-6 6-16 0-22-3-3-7-5-11-5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-62tmrsgniji";
freezeTemplate(tmpl);
