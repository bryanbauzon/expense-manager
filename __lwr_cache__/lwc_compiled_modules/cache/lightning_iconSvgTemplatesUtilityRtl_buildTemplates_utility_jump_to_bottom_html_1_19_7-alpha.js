import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./jump_to_bottom.css";

import _implicitScopedStylesheets from "./jump_to_bottom.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M406 304L271 440c-6 6-16 6-22 0L114 304c-6-6-6-16 0-22l22-22c6-6 16-6 22 0l91 94c6 6 16 6 22 0l91-93c6-6 16-6 22 0l22 22c5 6 5 15 0 21zm0-181L271 261c-6 6-16 6-22 0L114 123c-6-6-6-16 0-22l22-22c6-6 16-6 22 0l91 94c6 6 16 6 22 0l91-93c6-6 16-6 22 0l22 22c5 6 5 16 0 21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1nr8cq3hnfe";
freezeTemplate(tmpl);
