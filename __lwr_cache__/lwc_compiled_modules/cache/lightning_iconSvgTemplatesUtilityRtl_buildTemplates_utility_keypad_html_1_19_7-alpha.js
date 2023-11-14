import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./keypad.css";

import _implicitScopedStylesheets from "./keypad.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M86 369a66 66 0 11-66 66 65 65 0 0166-66zm174 0a66 66 0 11-65 65 66 66 0 0165-65zm175 0a66 66 0 11-66 65 65 65 0 0166-65zM86 195a66 66 0 11-66 65 66 66 0 0166-65zm174 0a66 66 0 11-65 65 66 66 0 0165-65zm175 0a66 66 0 11-1 0zM86 20a66 66 0 11-66 66 65 65 0 0166-66zm174 0a66 66 0 11-65 66 66 66 0 0165-66zm175 0a66 66 0 11-66 66 66 66 0 0166-66z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-51469dd9trs";
freezeTemplate(tmpl);
