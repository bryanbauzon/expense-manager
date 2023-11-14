import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./date_input.css";

import _implicitScopedStylesheets from "./date_input.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M463 197H57c-9 0-16 7-16 16v235c0 26 21 47 47 47h344c26 0 47-21 47-47V213c0-9-7-16-16-16zM182 416c0 9-7 16-16 16h-31c-9 0-16-7-16-16v-31c0-9 7-16 16-16h31c9 0 16 7 16 16zm109 0c0 9-7 16-16 16h-31c-9 0-16-7-16-16v-31c0-9 7-16 16-16h31c9 0 16 7 16 16zm0-109c0 9-7 16-16 16h-31c-9 0-16-7-16-16v-31c0-9 7-16 16-16h31c9 0 16 7 16 16zm110 0c0 9-7 16-16 16h-31c-9 0-16-7-16-16v-31c0-9 7-16 16-16h31c9 0 16 7 16 16zm31-235h-39V56c0-17-14-31-31-31a31 31 0 00-31 31v16H190V56c0-17-14-31-31-31s-31 14-31 31v16H88a47 47 0 00-47 47v16c0 9 7 16 16 16h407c9 0 16-7 16-16v-16a48 48 0 00-48-47z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-pbrtkumjf8";
freezeTemplate(tmpl);
