import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./account.css";

import _implicitScopedStylesheets from "./account.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M79 51.1c.1-2.1-1.4-2.7-2-2.7H55.2c-1.9 0-2.2 2-2.2 2.2V74h26zM64 67.9a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm0-10.2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm10 10.2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm0-10.2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zM59 40.3V28.7c.1-2.1-1.4-2.7-2-2.7H23.2c-1.9 0-2.2 2-2.2 2.2V74h26V44.7s0-2.4 2.2-2.4h7.9c1.1 0 1.9-1.2 1.9-2zM32 66.9a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm0-10.3a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm0-10.2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm0-10.2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm11 30.7a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm0-10.3a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm0-10.2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm0-10.2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm11 0a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-65kf0ji2vtl";
freezeTemplate(tmpl);
