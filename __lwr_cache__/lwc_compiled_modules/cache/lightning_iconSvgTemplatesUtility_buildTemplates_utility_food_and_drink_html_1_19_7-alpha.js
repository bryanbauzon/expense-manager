import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./food_and_drink.css";

import _implicitScopedStylesheets from "./food_and_drink.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M409 240c-10 79-74 130-129 130H160c-60 0-130-60-130-150V80c0-11 9-20 20-20h390a60 60 0 0160 60v60a60 60 0 01-60 60zm-3 160c7 0 14 7 14 14v1c0 25-20 45-44 45H64c-24 0-44-20-44-45 0-8 7-15 14-15zm4-290v80h20a20 20 0 0020-20v-40a20 20 0 00-20-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5icd69vea53";
freezeTemplate(tmpl);
