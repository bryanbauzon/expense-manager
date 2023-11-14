import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./employee.css";

import _implicitScopedStylesheets from "./employee.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M721 467c-30-138-177-239-206-259l-4-2a33 33 0 00-24 0l-2 1c-29 19-175 120-206 258a222 222 0 0044 191 245 245 0 00147 90l-15 26a25 25 0 000 17 17 17 0 0015 9h61a20 20 0 0015-9 25 25 0 000-17l-15-26a240 240 0 00147-90 223 223 0 0043-189zm-83 157l-17 19a130 130 0 00-120-80h-4a123 123 0 00-117 80l-17-19a174 174 0 01-35-147c24-106 133-192 172-218 39 27 148 113 172 219a166 166 0 01-34 146z"${3}/><circle cx="500" cy="463" r="84"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-e5huqd5fs1";
freezeTemplate(tmpl);
