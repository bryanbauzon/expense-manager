import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./resource_absence.css";

import _implicitScopedStylesheets from "./resource_absence.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M499 200a254 254 0 10252 255c0-138-112-255-252-255zm166 380l-47 47-123-122-116 116-47-47 116-117-117-117 47-47 117 117 123-123 48 47-123 123zm-405 62h-13a48 48 0 00-47 48v63a47 47 0 0047 47h506a48 48 0 0047-47v-63a47 47 0 00-47-48h-16a302 302 0 01-477 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-77jhkirghtc";
freezeTemplate(tmpl);
