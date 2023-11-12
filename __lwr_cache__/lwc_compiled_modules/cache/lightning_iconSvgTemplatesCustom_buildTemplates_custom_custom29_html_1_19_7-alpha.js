import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom29.css";

import _implicitScopedStylesheets from "./custom29.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M739 280h-18c-12 0-21 10-21 22v398l1 4 25 35c2 2 5 2 8 0l25-35 1-4V302c0-12-9-22-21-22zm-159-80H300c-33 0-60 27-60 60v480c0 33 27 60 60 60h280c33 0 60-27 60-60V260c0-33-27-60-60-60zM440 780c-17 0-30-13-30-30s13-30 30-30 30 13 30 30-13 30-30 30zm140-100c0 11-9 20-20 20H320c-11 0-20-9-20-20V300c0-11 9-20 20-20h240c11 0 20 9 20 20v380z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-79p4m1vasff";
freezeTemplate(tmpl);
