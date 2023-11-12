import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pause.css";

import _implicitScopedStylesheets from "./pause.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M300 430c0 10 9 20 20 20h40c11 0 20-11 20-20V90c0-10-9-20-20-20h-40c-11 0-20 11-20 20zm-160 0c0 10 9 20 20 20h40c11 0 20-11 20-20V90c0-10-9-20-20-20h-40c-11 0-20 11-20 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-45kk08kqg1a";
freezeTemplate(tmpl);
