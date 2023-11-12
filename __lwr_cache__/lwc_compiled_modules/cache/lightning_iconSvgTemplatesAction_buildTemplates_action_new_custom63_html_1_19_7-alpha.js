import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom63.css";

import _implicitScopedStylesheets from "./new_custom63.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M196 340h128c9 0 16-7 16-16V196c0-9-7-16-16-16H196c-9 0-16 7-16 16v128c0 9 7 16 16 16zm280-56c14 0 24-10 24-24s-10-24-24-24h-40v-48h40c14 0 24-10 24-24s-10-24-24-24h-40v-8c0-26-22-48-48-48h-8V44c0-14-10-24-24-24s-24 10-24 24v40h-48V44c0-14-10-24-24-24s-24 10-24 24v40h-48V44c0-14-10-24-24-24s-24 10-24 24v40h-8c-26 0-48 22-48 48v8H44c-14 0-24 10-24 24s10 24 24 24h40v48H44c-14 0-24 10-24 24s10 24 24 24h40v48H44c-14 0-24 10-24 24s10 24 24 24h40v8c0 26 22 48 48 48h8v40c0 14 10 24 24 24s24-10 24-24v-40h48v40c0 14 10 24 24 24s24-10 24-24v-40h48v40c0 14 10 24 24 24s24-10 24-24v-40h8c26 0 48-22 48-48v-8h40c14 0 24-10 24-24s-10-24-24-24h-40v-48h40zm-88 80c0 14-10 24-24 24H156c-14 0-24-10-24-24V156c0-14 10-24 24-24h208c14 0 24 10 24 24v208z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-32emokheq8";
freezeTemplate(tmpl);
