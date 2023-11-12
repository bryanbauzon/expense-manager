import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./adjust_value.css";

import _implicitScopedStylesheets from "./adjust_value.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M230 149a66 66 0 11-65 66 65 65 0 0165-66zm207 157a6 6 0 000-8l-41-41a6 6 0 00-4-2 6 6 0 00-4 2L274 371l-17 57a8 8 0 008 10 6 6 0 002 0l57-17zm-15-78l42 42a6 6 0 004 2 6 6 0 004-2l21-19a20 20 0 000-29l-22-22a20 20 0 00-14-5 23 23 0 00-15 5s-13 13-19 20a6 6 0 000 9zM401 83H60a40 40 0 00-39 40v191a40 40 0 0039 39h188l40-39H105a45 45 0 00-45-46v-99a45 45 0 0046-46h250a45 45 0 0046 46v30l39-40v-36a40 40 0 00-39-40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1qsh1jjopr0";
freezeTemplate(tmpl);
