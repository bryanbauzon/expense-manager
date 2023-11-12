import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom94.css";

import _implicitScopedStylesheets from "./new_custom94.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M308 164V44c0-14-10-24-24-24h-32c-14 0-24 10-24 24s10 24 24 24h8v96a96 96 0 01-192 0V68h8c14 0 24-10 24-24S90 20 76 20H44c-14 0-24 10-24 24v120c0 79 65 144 144 144s144-65 144-144zm192 96c0-40-32-72-72-72s-72 32-72 72c0 31 20 58 48 68v18c0 58-48 106-106 106h-2c-50 0-93-36-104-83-2-7-8-13-16-13h-16c-10 0-18 10-16 19 13 71 76 125 150 125h2c86 0 155-70 155-154v-18c29-10 49-37 49-68zm-72 24c-14 0-24-10-24-24s10-24 24-24 24 10 24 24-10 24-24 24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3j0iro52cvj";
freezeTemplate(tmpl);
