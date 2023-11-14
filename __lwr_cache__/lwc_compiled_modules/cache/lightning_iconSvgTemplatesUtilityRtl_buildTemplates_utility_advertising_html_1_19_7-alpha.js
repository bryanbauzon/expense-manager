import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./advertising.css";

import _implicitScopedStylesheets from "./advertising.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M230 272h4c2-27 12-51 27-70-8-8-18-13-31-13a41 41 0 00-42 42c0 23 18 41 42 41zm12 80c5 0 10-1 12-1-8-13-14-27-17-40h-7c-45 0-84-36-84-84 0-45 36-84 84-84 25 0 49 11 64 29 12-7 25-11 39-13a126 126 0 00-104-54c-72 0-126 57-126 126s57 126 129 123c4-1 7-1 10-2zm257 103v14c0 16-14 30-30 30H228c-16 0-30-14-30-30v-14c0-36 43-59 83-77l4-2c3-1 6-1 9 1 16 11 35 16 54 16s38-6 54-16c3-2 6-2 9-1l4 2c42 18 84 40 84 77zM348 198c42 0 75 37 75 83s-33 83-75 83-75-37-75-83 34-83 75-83zM185 392c-69-20-122-85-122-161 0-93 75-168 168-168 69 0 131 41 156 102 20 8 38 21 51 38A209.3 209.3 0 00230 21 207 207 0 0021 230c0 92 58 170 142 197 4-14 12-25 22-35z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4foq5qcscbm";
freezeTemplate(tmpl);
