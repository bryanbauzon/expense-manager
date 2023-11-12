import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom97.css";

import _implicitScopedStylesheets from "./custom97.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M600 544V291c0-62-48-111-109-111h-2c-61 0-109 49-109 111v253a160 160 0 10220 0zm-26 116H406c-9 0-16-9-15-18 4-24 17-45 36-60 7-6 12-15 12-24V291c0-29 22-51 49-51h2c28 0 49 22 49 51v9h-30c-17 0-30 13-30 30s13 30 30 30h30v40h-30c-17 0-30 13-30 30s13 30 30 30h30v40h-30c-17 0-30 13-30 30s13 30 30 30h30c1 9 5 16 12 22 19 15 32 37 36 60 3 9-4 18-13 18z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-68m8qoaqrg7";
freezeTemplate(tmpl);
