import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom49.css";

import _implicitScopedStylesheets from "./new_custom49.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 188c-40 0-72 32-72 72s32 72 72 72 72-32 72-72-32-72-72-72zm0 112c-22 0-40-18-40-40s18-40 40-40 40 18 40 40-18 40-40 40zm0-280a240 240 0 100 480 240 240 0 100-480zm0 423c0 10-8 17-18 16-96-8-173-85-182-182 0-9 7-17 17-17h16c8 0 15 6 16 14 7 72 65 130 137 137 8 1 14 8 14 16zm0-63c-66 0-120-54-120-120s54-120 120-120 120 54 120 120-54 120-120 120zm183-120h-16c-8 0-15-6-16-14-7-72-65-130-137-137-8-1-14-8-14-16V77c0-10 8-17 18-16 97 8 174 86 182 182 0 9-7 17-17 17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-78rjbdjkkr2";
freezeTemplate(tmpl);
