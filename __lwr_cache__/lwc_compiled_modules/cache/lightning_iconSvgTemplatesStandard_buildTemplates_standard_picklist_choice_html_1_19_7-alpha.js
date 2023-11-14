import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./picklist_choice.css";

import _implicitScopedStylesheets from "./picklist_choice.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M259 597h-40c-11 0-20 9-20 20v40c0 11 9 20 20 20h42c11-1 19-10 18-20v-40c0-11-9-20-20-20zm121-277h399c11 0 20-9 20-20v-40c0-11-9-20-20-20H380c-11 0-20 9-20 20v40c0 11 9 20 20 20zm0 179h399c11 0 20-9 20-20v-40c0-11-9-20-20-20H380c-11 0-20 9-20 20v40c0 11 9 20 20 20zM259 239h-40c-11 0-20 9-20 20v40c0 11 9 20 20 20h42c11-1 19-10 18-20v-40c0-11-9-20-20-20zm0 179h-40c-11 0-20 9-20 20v40c0 11 9 20 20 20h42c11-1 19-10 18-20v-40c0-11-9-20-20-20zm177 255c0-23 8-45 21-63v-13h-77c-11 0-20 9-20 20v40c0 11 9 20 20 20h56v-4zm181-105a57 57 0 0189 11c8-3 18-6 28-6 37 0 68 31 68 67 0 37-31 67-68 67l-13-1c-8 15-25 25-43 25-8 0-15-2-22-5-9 20-29 34-52 34-25 0-45-15-53-36l-11 1c-29 0-53-23-53-52 0-19 10-36 26-45-3-7-5-15-5-24 0-33 28-60 61-60 19 0 37 9 48 24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7leg51hnmnp";
freezeTemplate(tmpl);
