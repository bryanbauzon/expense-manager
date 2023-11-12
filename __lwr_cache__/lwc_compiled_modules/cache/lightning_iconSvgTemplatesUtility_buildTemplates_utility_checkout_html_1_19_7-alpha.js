import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./checkout.css";

import _implicitScopedStylesheets from "./checkout.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M387 274a113 113 0 11-114 113 113 113 0 01114-114zM204 375a40 40 0 11-40 40 40 40 0 0140-40zm224-35l-60 68-28-28a8 8 0 00-11 0l-11 10a7 7 0 000 10v1l38 38a16 16 0 0011 5 15 15 0 0013-4l72-79a8 8 0 000-10l-12-10a8 8 0 00-10 0zM82 20a24 24 0 0123 17l6 22h353a15 15 0 0115 14 12 12 0 010 5l-42 146a14 14 0 01-6 9 164 164 0 00-44-7 160 160 0 00-55 10H194a22 22 0 00-23 22 21 21 0 002 7v1a23 23 0 0021 16h71a160 160 0 00-27 46h-78a23 23 0 01-23-16L65 66H43a24 24 0 01-23-24 25 25 0 0125-22h37z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5msbnp873hv";
freezeTemplate(tmpl);
