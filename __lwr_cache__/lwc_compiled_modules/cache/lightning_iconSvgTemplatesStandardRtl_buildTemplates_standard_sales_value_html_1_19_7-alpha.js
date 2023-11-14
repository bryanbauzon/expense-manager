import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sales_value.css";

import _implicitScopedStylesheets from "./sales_value.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M795 739L629 574c34-47 51-107 42-171-15-107-102-192-211-202-147-15-272 110-257 258 10 107 95 196 202 211 64 9 123-9 171-42l166 166c7 7 19 7 26 0l26-26c8-9 8-21 1-29zM543 557v-43c0-8-7-15-15-15s-15 7-15 15v63c-18 10-38 16-60 18v-60c0-8-7-15-15-15s-15 7-15 15v60c-22-2-42-8-60-18v-63c0-8-7-15-15-15s-15 7-15 15v42c-26-23-45-53-53-89l68-54 71 53c6 5 15 4 20-2l74-82v52c0 8 7 15 15 15s15-7 15-15v-90c0-8-7-15-15-15h-80c-8 0-15 7-15 15s7 16 15 16h45l-67 75-69-52c-5-4-13-4-18 0l-62 49a161 161 0 11266 125z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-36ve6fg03nb";
freezeTemplate(tmpl);
