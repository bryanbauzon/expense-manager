import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom32.css";

import _implicitScopedStylesheets from "./new_custom32.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M488 142L301 249l-12 3c-9 0-18-5-22-14-6-11 0-26 11-32l62-35v-61c0-6-6-10-12-7L100 233l-12 3c-8 0-17-4-21-12-6-11-2-26 9-33l39-22V36c1-9-6-16-15-16H36c-9 0-16 7-16 16v416c0 26 22 48 48 48h136c9 0 16-7 16-16v-56c0-9 7-16 16-16h48c9 0 16 7 16 16v56c0 9 7 16 16 16h136c26 0 48-22 48-48V150c0-7-6-11-12-8zM140 364c0 9-7 16-16 16h-16c-9 0-16-7-16-16v-48c0-9 7-16 16-16h16c9 0 16 7 16 16zm96 0c0 9-7 16-16 16h-16c-9 0-16-7-16-16v-48c0-9 7-16 16-16h16c9 0 16 7 16 16zm96 0c0 9-7 16-16 16h-16c-9 0-16-7-16-16v-48c0-9 7-16 16-16h16c9 0 16 7 16 16zm96 0c0 9-7 16-16 16h-16c-9 0-16-7-16-16v-48c0-9 7-16 16-16h16c9 0 16 7 16 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-577prihd9r";
freezeTemplate(tmpl);
