import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./button_choice.css";

import _implicitScopedStylesheets from "./button_choice.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M320 120c15 0 30 11 30 41v99c0 15 14 21 20 23l68 25a63 63 0 0139 74l-32 104c-2 8-9 14-18 14H266c-8 0-15-4-18-11l-64-150c-5-10-2-17 8-23 18-13 45 0 56 20l16 21c7 13 26 13 26-5V162c0-30 15-42 30-42zM460 20a40 40 0 0140 40v150c0 19-18 40-40 40h-60c-10 0-10-8-10-10v-85c0-38-20-75-70-75s-70 32-70 75v86c0 3-3 9-10 9H60a40 40 0 01-40-40V60a40 40 0 0140-40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4ak5l598j6h";
freezeTemplate(tmpl);
