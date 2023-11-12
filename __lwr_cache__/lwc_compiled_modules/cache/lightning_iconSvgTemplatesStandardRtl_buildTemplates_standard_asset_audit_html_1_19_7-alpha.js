import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./asset_audit.css";

import _implicitScopedStylesheets from "./asset_audit.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M219 206h50a19 19 0 0119 19v387a19 19 0 01-19 19h-50a19 19 0 01-19-19V225a19 19 0 0119-19zm512 0h50a19 19 0 0119 19v387a19 19 0 01-19 19h-50a19 19 0 01-18-19V225a19 19 0 0118-19zm-87 0h-38a20 20 0 00-19 20l1 155a12 12 0 007 11 233 233 0 0156 41c4 4 12 2 12-3V226a20 20 0 00-19-20zM476 371a147 147 0 0124-1 147 147 0 0124 1 12 12 0 0013-12l1-133a20 20 0 00-19-20h-38a20 20 0 00-19 20l1 133a12 12 0 0013 12zm-127 63a187 187 0 0157-42 13 13 0 007-11V226a20 20 0 00-19-20h-38a20 20 0 00-19 20l1 204c0 5 6 7 11 4zm151-4a159 159 0 00-158 158 158 158 0 10158-158zm89 123L489 663a21 21 0 01-16 6 22 22 0 01-16-6l-53-53-1-1a10 10 0 011-14l15-15a11 11 0 0116 0l38 39 85-95a11 11 0 0115 0l16 14a12 12 0 010 14z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-4l48eedbmrs";
freezeTemplate(tmpl);
