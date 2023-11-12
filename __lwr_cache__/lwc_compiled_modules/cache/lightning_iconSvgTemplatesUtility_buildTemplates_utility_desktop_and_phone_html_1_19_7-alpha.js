import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./desktop_and_phone.css";

import _implicitScopedStylesheets from "./desktop_and_phone.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 205c0-12-10-22-22-22H337c-12 0-22 10-22 22v237c0 12 10 22 22 22h141c12 0 22-10 22-22z"${3}/><path d="M277 294H84c-7 0-13-7-13-13V119c0-7 7-13 13-13h281c7 0 13 7 13 13v25h51V90c0-18-16-34-34-34H54c-18 0-34 16-34 34v222c0 18 16 34 34 34h223zm0 148v-30h-19c-5 0-9-4-9-9v-17c0-5-4-9-9-9h-34c-5 0-9 4-9 9v17c0 5-4 9-9 9h-26c-18 0-34 16-34 34v4c0 7 7 13 13 13h141c-4-6-5-13-5-21z"${3}/><path d="M467 402c0 4-4 9-9 9H356c-4 0-9-4-9-9V235c0-4 4-9 9-9h102c4 0 9 4 9 9z"${3}/><circle cx="408" cy="438" r="16"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7ll5neom5d7";
freezeTemplate(tmpl);
