import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./cases.css";

import _implicitScopedStylesheets from "./cases.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M90 35c0-8-7-15-15-15H35c-8 0-15 7-15 15v310c0 8 7 15 15 15h40c8 0 15-7 15-15V35zm410 0c0-8-7-15-15-15h-40c-8 0-15 7-15 15v310c0 8 7 15 15 15h40c8 0 15-7 15-15V35zM375 20h-30c-8 0-15 8-15 16v124c0 4 2 7 6 9 17 9 32 20 45 33 3 3 9 1 9-3V36c0-8-7-16-15-16zM241 152l19-1 19 1c6 1 11-4 11-10V36c0-8-7-16-15-16h-30c-8 0-15 8-15 16v106c0 6 5 11 11 10zm-102 50c13-14 29-25 46-33 3-2 5-5 5-9V36c0-8-7-16-15-16h-30c-8 0-15 8-15 16v163c0 4 5 6 9 3zm121-11a130 130 0 00-114 192l-71 71c-6 6-6 15 0 21l21 21c6 6 15 6 21 0l69-69a130 130 0 1074-236zm0 200c-39 0-70-31-70-70s31-70 70-70 70 31 70 70-31 70-70 70z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-60tdna3i02f";
freezeTemplate(tmpl);
