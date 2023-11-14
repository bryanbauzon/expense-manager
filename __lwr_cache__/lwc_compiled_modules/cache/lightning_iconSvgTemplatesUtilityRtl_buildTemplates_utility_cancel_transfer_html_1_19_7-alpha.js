import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./cancel_transfer.css";

import _implicitScopedStylesheets from "./cancel_transfer.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M251 123V93c40 0 72 32 72 72h-30l46 57c3 3 7 3 9 0l46-57h-30c0-63-52-114-114-114V21l-57 46c-3 3-2 7 1 9zm12 213a158 158 0 00-58-38c-24-10-27-20-27-30a40 40 0 0114-28 75 75 0 0021-53c0-40-24-75-65-75h-4c-41 0-65 35-65 75 0 22 7 40 21 53 8 7 14 17 14 28 0 10-3 20-27 30-34 15-66 31-67 63 3 23 18 39 38 39h179l10-2c1-22 6-43 16-62zm55 10l60 60-60 60c-6 6-6 16 0 21l7 7c6 6 16 6 21 0l60-60 60 60c6 6 16 6 21 0l7-7c6-6 6-16 0-21l-60-60 60-60c6-6 6-16 0-21l-7-7c-6-6-16-6-21 0l-60 60-60-60c-6-6-16-6-21 0l-7 7c-6 5-6 15 0 21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6an7pftpkf8";
freezeTemplate(tmpl);
