import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./truck.css";

import _implicitScopedStylesheets from "./truck.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M496 237l-59-59a15 15 0 00-10-4h-62a15 15 0 00-15 15v120a7 7 0 0010 6 88 88 0 0135-6 91 91 0 0178 46 8 8 0 0012 2 46 46 0 0015-33v-77a15 15 0 00-4-10zM290 106H35a15 15 0 00-15 15v203a46 46 0 0015 34 7 7 0 0011-3 90 90 0 01162 9 7 7 0 007 5h45a45 45 0 0045-45V121a15 15 0 00-15-15z"${3}/><circle cx="395" cy="399" r="45"${3}/><circle cx="125" cy="399" r="45"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1efok132s3e";
freezeTemplate(tmpl);
