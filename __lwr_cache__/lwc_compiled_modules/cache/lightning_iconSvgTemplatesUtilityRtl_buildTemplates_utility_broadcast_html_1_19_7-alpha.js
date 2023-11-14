import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./broadcast.css";

import _implicitScopedStylesheets from "./broadcast.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20 190c0 58 23 113 64 154 9 9 22 9 31 0s9-23 0-32a174 174 0 010-244c9-9 9-23 0-32s-22-9-31 0a216 216 0 00-64 154zm127 90c9 9 23 9 32 0s9-23 0-32a82 82 0 010-116c9-9 9-23 0-32s-23-9-32 0a127 127 0 00-37 90 127 127 0 0037 90zM435 36c-9-9-23-9-32 0s-9 23 0 32a175 175 0 0151 122 174 174 0 01-51 122c-9 9-9 23 0 32s23 9 32 0a216 216 0 0063-154 216 216 0 00-63-154zm-26 154c0-34-14-66-38-90-9-9-22-9-31 0s-9 23 0 32a82 82 0 010 116c-9 9-9 23 0 32s22 9 31 0a127 127 0 0037-90zm-172 54a59 59 0 1145-1v236c0 6-6 12-12 11h-22c-6 0-11-5-11-11z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2bctnadtl60";
freezeTemplate(tmpl);
