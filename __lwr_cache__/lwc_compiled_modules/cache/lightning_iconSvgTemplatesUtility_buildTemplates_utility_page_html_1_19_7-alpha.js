import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./page.css";

import _implicitScopedStylesheets from "./page.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M444 190H332c-26 0-42-16-42-42V36c0-9-7-16-16-16H108a49 49 0 00-48 48v384c0 26 22 48 48 48h304c26 0 48-22 48-48V206c0-9-7-16-16-16zm13-61L351 23c-2-2-6-3-9-3-6 0-12 5-12 11v85c0 18 16 34 34 34h85c6 0 11-6 11-12 0-3-1-7-3-9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1ijmh068ea3";
freezeTemplate(tmpl);
