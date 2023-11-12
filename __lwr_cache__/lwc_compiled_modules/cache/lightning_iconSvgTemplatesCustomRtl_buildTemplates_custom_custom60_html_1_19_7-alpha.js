import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom60.css";

import _implicitScopedStylesheets from "./custom60.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M80 45.3a30.4 30.4 0 00-60 0c-.2.9.9 1.6 1.6 1 1.5-1.3 3.4-2 5.6-2 2.8 0 5.2 1.3 6.8 3.3a1 1 0 001.6 0 8.6 8.6 0 0113.6 0 1 1 0 001.6 0 8.6 8.6 0 0113.6 0 1 1 0 001.6 0c1.6-2 4-3.3 6.8-3.3 2.1 0 4.1.8 5.6 2 .7.6 1.7 0 1.6-1zM62 68c-1.7 0-3 1.3-3 3s-1.3 3-3 3-3-1.3-3-3V57c0-1.7-1.3-3-3-3s-3 1.3-3 3v14c0 5 4 9 9 9s9-4 9-9a3 3 0 00-3-3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5ksv8mjbnbc";
freezeTemplate(tmpl);
