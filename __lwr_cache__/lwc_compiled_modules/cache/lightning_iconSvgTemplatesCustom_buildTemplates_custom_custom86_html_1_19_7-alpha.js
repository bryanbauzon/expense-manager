import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom86.css";

import _implicitScopedStylesheets from "./custom86.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M38 30h4a.94.94 0 001-1v-3h14v3a.94.94 0 001 1h4a.94.94 0 001-1v-3a6 6 0 00-6-6H43a6 6 0 00-6 6v3a.94.94 0 001 1zm36 6H26a6 6 0 00-6 6v32a6 6 0 006 6h48a6 6 0 006-6V42a6 6 0 00-6-6zM50 72c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14-6.3 14-14 14zm6-17h-3v-3a2 2 0 00-2-2h-2a2 2 0 00-2 2v3h-3a2 2 0 00-2 2v2c0 1.1.9 2 2 2h3v3c0 1.1.9 2 2 2h2a2 2 0 002-2v-3h3a2 2 0 002-2v-2a2 2 0 00-2-2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-109qtpirdut";
freezeTemplate(tmpl);
