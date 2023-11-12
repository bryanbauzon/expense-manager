import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom24.css";

import _implicitScopedStylesheets from "./new_custom24.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M403 20H117c-26 0-47 22-47 47v1c0 9 7 16 16 16h348c9 0 16-7 16-16v-1c0-25-21-47-47-47zm-1 112H118c-9 0-16 7-16 16v336c0 9 7 16 16 16h88c9 0 15-7 15-16v-64c0-9 8-16 17-16h46c9 0 17 7 17 16v64c0 9 6 16 15 16h88c9 0 16-7 16-16V148c-2-9-9-16-18-16zM236 348c0 9-7 16-16 16h-32c-9 0-16-7-16-16v-32c0-9 7-16 16-16h32c9 0 16 7 16 16zm0-112c0 9-7 16-16 16h-32c-9 0-16-7-16-16v-32c0-9 7-16 16-16h32c9 0 16 7 16 16zm111 112c0 9-7 16-16 16h-31c-9 0-16-7-16-16v-32c0-9 7-16 16-16h32c9 0 16 7 16 16v32zm0-112c0 9-7 16-16 16h-31c-9 0-16-7-16-16v-32c0-9 7-16 16-16h32c9 0 16 7 16 16v32z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-14d6lg0k4t0";
freezeTemplate(tmpl);
