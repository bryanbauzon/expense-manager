import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./asset_audit.css";

import _implicitScopedStylesheets from "./asset_audit.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M375 20h-30a16 16 0 00-15 16v124a10 10 0 006 9 187 187 0 0145 33 5 5 0 009-3V36a16 16 0 00-15-16zM241 152a121 121 0 0119-1 121 121 0 0119 1 10 10 0 0011-10V36a16 16 0 00-15-16h-30a16 16 0 00-15 16v106a10 10 0 0011 10zm-102 50a150 150 0 0146-33 10 10 0 005-9V36a16 16 0 00-15-16h-30a16 16 0 00-15 16v163c0 4 5 6 9 3zm121-3a127 127 0 00-127 127 127 127 0 10127-127zm71 98l-80 88a16 16 0 01-12 5 18 18 0 01-13-5l-43-42a8 8 0 010-12l13-12a9 9 0 0112 0l30 31 68-76a9 9 0 0112 0l13 12a10 10 0 010 11z"${3}/><rect width="70" height="340" x="20" y="20" rx="15"${3}/><rect width="70" height="340" x="430" y="20" rx="15"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2rk78cocf9n";
freezeTemplate(tmpl);
