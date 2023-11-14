import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./file.css";

import _implicitScopedStylesheets from "./file.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M290 630V310c-33 0-60 27-60 60v380c0 33 27 60 60 60h300c33 0 60-27 60-60H410c-66 0-120 0-120-120zm460-260H650c-33 0-60-27-60-60V210c0-11-9-20-20-20H410c-33 0-60 27-60 60v380c0 33 27 60 60 60h300c33 0 60-27 60-60V390c0-11-9-20-20-20zm16-84l-92-92c-3-3-6-4-10-4-8 0-14 6-14 14v66c0 22 18 40 40 40h66c8 0 14-6 14-14 0-4-1-7-4-10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-56e9f195d8g";
freezeTemplate(tmpl);
