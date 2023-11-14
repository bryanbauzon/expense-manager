import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./adjust_value.css";

import _implicitScopedStylesheets from "./adjust_value.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M230 150a65 65 0 11-65 65 65 65 0 0165-66zm207 156a6 6 0 000-8l-41-41a6 6 0 00-9 0L274 370l-17 57a8 8 0 008 10 6 6 0 002 0l57-17zm-14-76l41 41a6 6 0 009 0l20-20a20 20 0 000-29l-22-22a20 20 0 00-14-5 23 23 0 00-15 5l-20 20a6 6 0 000 9zM400 83H60a40 40 0 00-40 40v190a40 40 0 0040 40h188l40-40H105a45 45 0 00-45-45V168a45 45 0 0046-45h250a45 45 0 0044 47v30l39-40v-36a40 40 0 00-39-40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-79gv0260e0l";
freezeTemplate(tmpl);
