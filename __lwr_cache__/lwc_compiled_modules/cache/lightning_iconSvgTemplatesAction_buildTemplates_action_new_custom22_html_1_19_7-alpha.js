import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom22.css";

import _implicitScopedStylesheets from "./new_custom22.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M481 371l-50-40a48 48 0 00-58-2l-47 34c-6 5-15 4-21-2l-78-70-71-78c-6-6-6-14-2-21l34-47c13-18 12-42-2-58l-40-50a46 46 0 00-69-4L34 77a50 50 0 00-14 36 416 416 0 00386 387c14 1 26-5 36-14l43-43c21-21 19-54-4-72z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-75ll41hkdk2";
freezeTemplate(tmpl);
