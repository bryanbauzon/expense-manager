import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom87.css";

import _implicitScopedStylesheets from "./custom87.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M75 20H25a3 3 0 00-3 3v48a3 3 0 003 3h1v3a3 3 0 003 3h2a3 3 0 003-3v-3h32v3a3 3 0 003 3h2a3 3 0 003-3v-3h1a3 3 0 003-3V23a3 3 0 00-3-3zM31 68a3 3 0 01-3-3V29a3 3 0 013-3h38a3 3 0 013 3v36a3 3 0 01-3 3H31zm33-36H36a2 2 0 00-2 2v26c0 1.1.9 2 2 2h28a2 2 0 002-2V34a2 2 0 00-2-2zm-4.7 18H51c-1.1 2-3.4 4-6.2 4-3.8 0-6.8-3.2-6.8-7s3-7 6.8-7c2.8 0 5.2 2 6.2 4h8.2c1.5 0 2.7 1.5 2.7 3s-1.1 3-2.6 3z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-1ul19am5vl8";
freezeTemplate(tmpl);
