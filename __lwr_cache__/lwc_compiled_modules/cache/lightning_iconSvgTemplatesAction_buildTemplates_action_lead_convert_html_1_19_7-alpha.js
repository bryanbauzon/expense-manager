import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lead_convert.css";

import _implicitScopedStylesheets from "./lead_convert.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M276 283c-6 6-6 15 0 21l21 21c6 6 15 6 21 0l135-135c6-6 6-15 0-21L319 34c-6-6-15-6-21 0l-21 21c-6 6-6 15 0 21l57 56c16 18-10 17-10 17h-80c-95 1-176 79-174 174 2 92 77 167 170 167h35c8 0 15-7 15-15v-30c0-8-7-15-15-15h-32c-57 0-107-42-113-99-6-66 46-121 110-121h86c7 2 10 11 5 17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ot8t29apuv";
freezeTemplate(tmpl);
