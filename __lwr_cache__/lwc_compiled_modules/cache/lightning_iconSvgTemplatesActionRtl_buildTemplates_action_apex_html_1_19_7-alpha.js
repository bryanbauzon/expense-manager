import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./apex.css";

import _implicitScopedStylesheets from "./apex.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M485 400H215c-8 0-15 7-15 15v30c0 8 7 15 15 15h270c8 0 15-7 15-15v-30c0-8-7-15-15-15zM254 218L60 63c-6-5-15-4-20 3L23 90c-5 7-3 16 3 21l138 110c5 4 5 12 0 16L26 347c-6 5-8 15-3 21l17 26c5 7 14 8 20 3l194-155c8-6 8-18 0-24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-34vtfggauq";
freezeTemplate(tmpl);
