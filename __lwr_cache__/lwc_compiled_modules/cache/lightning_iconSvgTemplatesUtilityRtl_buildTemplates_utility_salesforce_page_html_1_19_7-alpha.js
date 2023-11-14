import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./salesforce_page.css";

import _implicitScopedStylesheets from "./salesforce_page.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M444.4 190H332a38.9 38.9 0 01-42-35.5 35.3 35.3 0 010-6.5V36a15.8 15.8 0 00-15.6-16H108a48.7 48.7 0 00-48 48v384a48.7 48.7 0 0048 48h304a48.7 48.7 0 0048-48V206a15.8 15.8 0 00-15.6-16zM335.9 393.5a39.2 39.2 0 01-10.8-1 41.9 41.9 0 01-36.8 21.6A52.4 52.4 0 01270 410a48.8 48.8 0 01-44.3 29.1 47.2 47.2 0 01-45.7-31.3c-2.2 0-6.5 1.1-10 1.1a44.9 44.9 0 01-45.4-44.2 43.9 43.9 0 0122.7-38.9 63.3 63.3 0 01-4.4-20.6 52.6 52.6 0 0151.9-51.8 59.2 59.2 0 0140.6 21.4 47.9 47.9 0 0134.6-14.2 49.1 49.1 0 0142.1 23.8 74.9 74.9 0 0123.8-5.4 59.3 59.3 0 0158.3 57.3 58.5 58.5 0 01-58.3 57.2z"${3}/><path d="M364 150h85a12 12 0 0011-12 14 14 0 00-3-9L351 23a14 14 0 00-9-3 12 12 0 00-12 11v85a34.9 34.9 0 0034 34z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-430oo9c3j7c";
freezeTemplate(tmpl);
