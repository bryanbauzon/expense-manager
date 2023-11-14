import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./entitlement_process.css";

import _implicitScopedStylesheets from "./entitlement_process.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M560 796V631l94-104h133v200c-1 38-31 68-69 69zm-60 0H352c-37 0-69-23-69-69h-23c-25 0-46-20-46-45v-1c0-25 21-46 46-46h23v-93h-23c-25 0-46-21-46-46s21-46 46-46h23v-93h-23c-25 0-46-20-46-45v-1c0-25 20-46 45-47h24c2-37 32-67 69-69h366c38 1 68 31 69 69v202H650L543 348c-8-8-22-8-30 0L390 483c-7 8-7 20 0 28l108 119z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5ru7nu523v9";
freezeTemplate(tmpl);
