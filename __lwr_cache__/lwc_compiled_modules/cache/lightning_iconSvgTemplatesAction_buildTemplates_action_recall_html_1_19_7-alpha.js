import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./recall.css";

import _implicitScopedStylesheets from "./recall.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M182 226c-5-6-2-16 5-18h90c67 0 121 57 115 126-6 59-58 103-118 103h-34c-8 0-16 7-16 16v31c0 8 7 16 16 16h36c97 0 175-78 177-174 2-99-82-180-181-181h-83s-27 1-10-18l59-58c6-6 6-16 0-22l-22-22c-6-6-16-6-22 0L54 166c-6 6-6 16 0 22l141 141c6 6 16 6 22 0l22-22c6-6 6-16 0-22z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ddrl73c4jp";
freezeTemplate(tmpl);
